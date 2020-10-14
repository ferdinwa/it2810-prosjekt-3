import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create Schema
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birth_date: {
        type: String,
    },
    age: {
        type: String
    } 
});

module.exports = mongoose.model('Player', PlayerSchema);
