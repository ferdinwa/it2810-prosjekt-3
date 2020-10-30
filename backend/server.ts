import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

const players = require('./routes/api/players')

//init Application
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






