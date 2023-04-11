const router = require("express").Router();
const Note = require("../models/Note");
const address = require("ip").address();

router.get("/", async (req, res) => {
  try {
    const data = await Note.find();
    res.render("index", { data: data, address: address });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
