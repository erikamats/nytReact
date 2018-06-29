const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection 

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytReact",
  {
    useMongoClient: true
  }
);