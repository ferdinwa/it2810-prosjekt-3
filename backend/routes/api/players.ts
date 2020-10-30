import express, { Request, Response } from "express";
const router = express.Router();

// Player Model
const Player = require("../../models/player");

// GET api/players
router.get("/", (_req: Request, res: Response) => {
  let playerName = _req.query.playerName;
  let position = _req.query.position;
  let nation = _req.query.nation;
  let club = _req.query.club;
  let skip = _req.query.skip;
  let limit = _req.query.limit;
  let age = _req.query.age;
  let score = _req.query.score;
  console.log(age, score);
  if (Number(age) === 0 && Number(score) === 0) {
    console.log("Ingen");
    return Player.find({
      name: { $regex: playerName, $options: "i" },
      position: { $regex: position, $options: "i" },
      nation: { $regex: nation, $options: "i" },
      club: { $regex: club, $options: "i" },
    })
      .skip(Number(skip))
      .limit(Number(limit))
      .then((players: any) => res.json(players));
  } else if (
    (Number(age) === 1 && Number(score) === 0) ||
    (Number(age) === -1 && Number(score) === 0)
  ) {
    console.log("Age");
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
  } else if (
    (Number(age) === 0 && Number(score) === 1) ||
    (Number(age) === 0 && Number(score) === -1)
  ) {
    console.log("Score");
    return Player.find({
      name: { $regex: playerName, $options: "i" },
      position: { $regex: position, $options: "i" },
      nation: { $regex: nation, $options: "i" },
      club: { $regex: club, $options: "i" },
    })
      .sort({ score: Number(score) })
      .skip(Number(skip))
      .limit(Number(limit))
      .then((players: any) => res.json(players));
  } else if (
    (Number(age) === 1 && Number(score) === 1) ||
    (Number(age) === -1 && Number(score) === -1) ||
    (Number(age) === -1 && Number(score) === 1) ||
    (Number(age) === 1 && Number(score) === -1)
  ) {
    console.log("Begge");
    return Player.find({
      name: { $regex: playerName, $options: "i" },
      position: { $regex: position, $options: "i" },
      nation: { $regex: nation, $options: "i" },
      club: { $regex: club, $options: "i" },
    })
      .sort({ score: Number(score) })
      .sort({ age: Number(age) })
      .skip(Number(skip))
      .limit(Number(limit))
      .then((players: any) => res.json(players));
  }
});

//update score on player in database
router.put("/:id", (req: Request, res: Response) => {
  console.log("put");
  console.log("id = " + req.params.id);
  console.log("Score = " + req.body.score);
  Player.findOneAndUpdate(
    {
      id: req.params.id,
    },
    { score: req.body.score },
    { new: true }
  ).then((data) => res.json(data));
});

module.exports = router;
