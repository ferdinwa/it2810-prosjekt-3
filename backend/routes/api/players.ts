import express, { Request, Response} from 'express';
const router = express.Router();

// Player Model
const Player = require('../../models/player')

// @route GET api/players
// @desc GET all items
// @access Public
router.get('/', (_req: Request, res: Response, {searchSequence}: any) => {
    Player.find({name: {"$regex": searchSequence, "$options": "i" }})
    .then((players : any) => res.json(players))
});

// @route POST api/players
// @desc Create a Player
// @access Public
router.post('/', (req: Request, res: Response) => {
    const newPlayer = new Player({
        name: req.body.name,
    });
    newPlayer.save().then(player => res.json(player))
});

// @route DELETE api/players/:id
// @desc Delete a Player
// @access Public
router.delete('/:id', (req: Request, res: Response) => {
    Player.findById(req.params.id)
    .then(player => player.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success : false }));
})

module.exports = router;

