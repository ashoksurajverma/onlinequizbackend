const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
  options: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Question", questionSchema);
