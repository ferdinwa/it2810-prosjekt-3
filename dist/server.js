"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
//import 'dotenv/config';
//import express, {Application, Request, Response, NextFunction} from 'express';
const players = require('./routes/api/players');
const app = express_1.default();
// Bodyparser Middleware
app.use(body_parser_1.default.json());
// DB config
const db = "mongodb://it2810-77.idi.ntnu.no:27017/fut";
//Connect to MongoDB
mongoose_1.default.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("MongoDB connected ..."))
    .catch((err) => console.log(err));
// Use Routes
app.use('/api/players', players);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App is listening on port ${port}`));
/*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

*/
