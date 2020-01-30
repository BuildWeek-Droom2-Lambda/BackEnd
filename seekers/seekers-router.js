const router = require("express").Router();

// get all seekers
router.get("/", async (req, res, next) => {
  res.status(200).send("welcome to seekers")
});

// get seeker by id
router.get("/:id", async (req, res, next) => {
  res.status(200).json({ userById: req.params.id })
})

// post a new seeker
router.post("/", async (req, res, next) => {
  res.status(201).send("post to seekers")
});

// update an existing seeker
router.put("/:id", async (req, res, next) => {
  res.status(200).json({
    message: "good",
    id: req.params.id
  })
});

// delete a seeker
router.delete("/:id", async (req, res, next) => {
  res.status(200).json({ id: req.params.id, deleted: true })
});

module.exports = router;