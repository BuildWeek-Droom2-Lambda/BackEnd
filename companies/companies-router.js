const router = require("express").Router();

// get all companies
router.get("/", async (req, res, next) => {
  res.status(200).send("welcome to companies")
});

// get company by id
router.get("/:id", async (req, res, next) => {
  res.status(200).json({ userById: req.params.id })
})

// post a new company
router.post("/", async (req, res, next) => {
  res.status(201).send("post to companies")
});

// update an existing company
router.put("/:id", async (req, res, next) => {
  res.status(200).json({
    message: "good",
    id: req.params.id
  })
});

// delete a company
router.delete("/:id", async (req, res, next) => {
  res.status(200).json({ id: req.params.id, deleted: true })
});

module.exports = router;