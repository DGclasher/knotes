const router = require("express").Router();
const Note = require("../models/Note");

router.get("/", (req, res) => {
  res.render("notes");
});

router.post("/", async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const saveNote = await newNote.save();
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json("Internal server error");
    console.log(error);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const response = await Note.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json("Internal server error").redirect("/");
  }
});

module.exports = router;
