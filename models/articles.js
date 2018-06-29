const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  snippet: { type: String, required: true },
  url: { type: String, required: true }
});

const Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;