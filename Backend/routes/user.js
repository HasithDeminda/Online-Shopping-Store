const router = require("express").Router();

//Get method
router.get("/usertest", (req, res) => {
  res.send("Test is Successfull!");
});

//Post method
router.post("/userpost", (req, res) => {
  const username = req.body.username;
  res.send("Sent Successfully!");
});

module.exports = router;
