const router = require("express").Router();
const model = require("../jobs/jobsModel");
const authenticate = require("../auth/auth-middleware");

const doesntExist = { message: "The job with that ID doesn't exist." };
const invalidRequest = { message: "You must include a name, location, and description of the job, and the company_id of the company posting the job in your request." }

// TODO: add authentication middleware to appropriate endpoints

// get all jobs
router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await model.find())
  } catch (err) {
    next(err)
  }
});

// get job by id
router.get("/:id", async (req, res, next) => {
  try {
    const job = await model.findById(req.params.id);

    if(job) {
      res.status(200).json(job)
    } else {
      return res.status(404).json(doesntExist)
    }
  } catch (err) {
    next(err)
  };
});

// post a new job
router.post("/", async (req, res, next) => {

  const job = req.body;

  if (!job || !job.name || !job.location || !job.description || !job.company_id) {
    return res.status(400).json(invalidRequest)
  };

  try {
    res.status(201).json(await model.add(job))
  } catch (err) {
    next(err)
  };
});

// update an existing job
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const job = await model.findById(id);

    if(!job) {
      return res.status(404).json(doesntExist)
    } else if (!updates.name || !updates.location || !updates.description || !updates.company_id ) {
      return res.status(400).json(invalidRequest)
    } else {
      return res.status(200).json(await model.update(id, updates))
    };

  } catch (err) {
    next(err)
  }
});

// delete a job
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id
  try {
    res.status(200).json(await model.remove(id))
  } catch (err) {
    next(err)
  }
});

module.exports = router;