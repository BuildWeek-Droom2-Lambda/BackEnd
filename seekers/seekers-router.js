const router = require("express").Router();
const model = require("../seekers/seekersModel");

const doesntExist = { message: "The seeker with that ID doesn't exist." };
const invalidRequest = { message: "You must include the name of the seeker in your request." }

// get all seekers
router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await model.find())
  } catch (err) {
    next(err)
  }
});

// get seeker by id
router.get("/:id", async (req, res, next) => {
  try {
    const seeker = await model.findById(req.params.id);

    if(seeker) {
      res.status(200).json(seeker)
    } else {
      return res.status(404).json(doesntExist)
    }
  } catch (err) {
    next(err)
  };
});

// update an existing seeker
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const seeker = await model.findById(id);

    if(!updates) {
      return res.status(400).json(invalidRequest)
    };

    if(!seeker) {
      return res.status(404).json(doesntExist)
    } else if (!updates.name) {
      return res.status(400).json(invalidRequest)
    } else {
      return res.status(200).json(await model.update(id, updates))
    };

  } catch (err) {
    next(err)
  }
});

// delete a seeker
router.delete("/:id", async (req, res, next) => {
  res.status(200).json({ id: req.params.id, deleted: true })
});

module.exports = router;