import express, { Request, Response } from "express";
const router = express.Router();

// Player Model
const Player = require("../../models/player");

// @route GET api/players
// @desc GET all items
// @access Public
router.get("/", (_req: Request, res: Response) => {
  let playerName = _req.query.playerName;
  let position = _req.query.position;
  let nation = _req.query.nation;
  let club = _req.query.club;
  let skip = _req.query.skip;
  let limit = _req.query.limit;
  let age = _req.query.age;
  if (Number(age) === 0) {
    return Player.find({
      name: { $regex: playerName, $options: "i" },
      position: { $regex: position, $options: "i" },
      nation: { $regex: nation, $options: "i" },
      club: { $regex: club, $options: "i" },
    })
      .skip(Number(skip))
      .limit(Number(limit))
      .then((players: any) => res.json(players));
  } else {
    return Player.find({
      name: { $regex: playerName, $options: "i" },
      position: { $regex: position, $options: "i" },
      nation: { $regex: nation, $options: "i" },
      club: { $regex: club, $options: "i" },
    })
      .sort({ age: Number(age) })
      .skip(Number(skip))
      .limit(Number(limit))
      .then((players: any) => res.json(players));
  }
});

// @route POST api/players
// @desc Create a Player
// @access Public
router.post("/hei", (req: Request, res: Response) => {
  const newPlayer = new Player({
    name: req.body.name,
  });
  newPlayer.save().then((player) => res.json(player));
});

// @route DELETE api/players/:id
// @desc Delete a Player
// @access Public
router.delete("/:id", (req: Request, res: Response) => {
  Player.findById(req.params.id)
    .then((player) => player.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
