"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Player Model
const Player = require("../../models/player");
// GET api/players
// Matches the axios.get request which gets all the players who matches the regex pattern
// This method also sorts the players if the user has chosen this.
// Also handles the pagination. 
router.get("/", (_req, res) => {
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
            .then((players) => res.json(players));
    }
    else if ((Number(age) === 1 && Number(score) === 0) ||
        (Number(age) === -1 && Number(score) === 0)) {
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
            .then((players) => res.json(players));
    }
    else if ((Number(age) === 0 && Number(score) === 1) ||
        (Number(age) === 0 && Number(score) === -1)) {
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
            .then((players) => res.json(players));
    }
    else if ((Number(age) === 1 && Number(score) === 1) ||
        (Number(age) === -1 && Number(score) === -1) ||
        (Number(age) === -1 && Number(score) === 1) ||
        (Number(age) === 1 && Number(score) === -1)) {
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
            .then((players) => res.json(players));
    }
});
//update score on player in database. Finds a player with the same id as
//the id sent in from the axios.put-function. Then updates this players score with
//the score sent in from the requests body. 
router.put("/:id", (req, res) => {
    Player.findOneAndUpdate({
        id: req.params.id,
    }, { score: req.body.score }, { new: true }).then((data) => res.json(data));
});
module.exports = router;
