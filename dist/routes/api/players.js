"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Player Model
const Player = require("../../models/player");
// @route GET api/players
// @desc GET all items
// @access Public
router.get("/", (_req, res) => {
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
            .then((players) => res.json(players));
    }
    else {
        return Player.find({
            name: { $regex: playerName, $options: "i" },
            position: { $regex: position, $options: "i" },
            nation: { $regex: nation, $options: "i" },
            club: { $regex: club, $options: "i" },
        })
            .sort({ age: Number(age) })
            .skip(Number(skip))
            .limit(Number(limit))
            .then((players) => res.json(players));
    }
});
router.put("/:id", (req, res) => {
    console.log('put');
    console.log("id = " + req.params.id);
    console.log("Score = " + req.body.score);
    Player.findOneAndUpdate({
        id: req.params.id
    }, { score: req.body.score }, { new: true }).then(data => res.json(data));
});
module.exports = router;
