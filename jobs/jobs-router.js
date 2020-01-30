const router = require("express").Router();

// get all jobs
router.get("/", async (req, res, next) => {
  res.status(200).send("welcome to jobs")
});

// get job by id
router.get("/:id", async (req, res, next) => {
  res.status(200).json({ userById: req.params.id })
})

// post a new job
router.post("/", async (req, res, next) => {
  res.status(201).send("post to jobs")
});

// update an existing job
router.put("/:id", async (req, res, next) => {
  res.status(200).json({
    message: "good",
    id: req.params.id
  })
});

// delete a job
router.delete("/:id", async (req, res, next) => {
  res.status(200).json({ id: req.params.id, deleted: true })
});

module.exports = router;