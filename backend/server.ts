import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
//import 'dotenv/config';
//import express, {Application, Request, Response, NextFunction} from 'express';

const players = require('./routes/api/players')

const app : Application = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = "mongodb://it2810-77.idi.ntnu.no:27017/fut";

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(()=> console.log("MongoDB connected ..."))
  .catch((err) => console.log(err))

// Use Routes
app.use('/api/players', players)
  
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App is listening on port ${port}`));

/*
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

*/





