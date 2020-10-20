"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
module.exports = mongoose_1.default.model('Player', PlayerSchema);
