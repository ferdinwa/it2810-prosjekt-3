"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Player Model
const Player = require('../../models/player');
// @route GET api/players
// @desc GET all items
// @access Public
router.get('/', (_req, res, { searchSequence }) => {
    Player.find({ name: { "$regex": searchSequence, "$options": "i" } })
        .then((players) => res.json(players));
});
// @route POST api/players
// @desc Create a Player
// @access Public
router.post('/', (req, res) => {
    const newPlayer = new Player({
        name: req.body.name,
    });
    newPlayer.save().then(player => res.json(player));
});
// @route DELETE api/players/:id
// @desc Delete a Player
// @access Public
router.delete('/:id', (req, res) => {
    Player.findById(req.params.id)
        .then(player => player.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;
