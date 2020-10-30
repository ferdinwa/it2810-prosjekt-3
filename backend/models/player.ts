import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create Schema for Player
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String
    },
    height: {
        type: String
    },
    position: {
        type: String
    },
    club: {
        type: String
    },
    nation: {
        type: String
    },
    rating: {
        type: Number
    },
    score: {
        type: Number
    }
});

module.exports = mongoose.model('Player', PlayerSchema);
