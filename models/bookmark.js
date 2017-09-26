const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmark = new Schema({
  headline: { type: String, required: true },
  web_url: { type: String, required: true },
  snippet: String,
  date: { type: Date, default: Date.now },
  Article_id: {type: String, required: true, unique: true}
});

const Bookmark = mongoose.model("Bookmark", bookmark);

module.exports = Bookmark;


//headline.main
//web_url
//snippet
//_id
