"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
module.exports = mongoose_1.default.model('Player', PlayerSchema);
