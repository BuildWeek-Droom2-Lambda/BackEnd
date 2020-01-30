const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "test endpoint in router" })
});

router.post("/register", async (req, res, next) => {
  res.status(201).json({ message: "register" })
});

router.post("/login", async (req, res, next) => {
  res.status(201).json({ message: "login" })
})

module.exports = router;