//const mongoose1 = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PlayerSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birth_date: {
        type: String
    },
    age: {
        type: String
    } 
});

module.exports = mongoose.model('Player', PlayerSchema);
