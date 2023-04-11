const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
