const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Olá Gigi, novo!");
});

module.exports = router;