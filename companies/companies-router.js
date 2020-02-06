const router = require("express").Router();
const model = require("../companies/companiesModel");
const authenticate = require("../auth/auth-middleware");

const doesntExist = { message: "The company with that ID doesn't exist." };
const invalidRequest = { message: "You must include the name of the company in your request." };
const invalidSaveRequest = { message: "You must include the seeker_id and seeker_name in your request." };

// get all companies
router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await model.find())
  } catch (err) {
    next(err)
  };
});

// get company by id
router.get("/:id", async (req, res, next) => {
  try {
    const company = await model.findById(req.params.id);

    if(company) {
      res.status(200).json(company)
    } else {
      return res.status(404).json(doesntExist)
    };
  } catch (err) {
    next(err)
  };
})

// update an existing company
router.put("/:id", authenticate, async (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  
  if(!updates) {
    return res.status(400).json(invalidRequest)
  };

  try {
    const company = await model.findById(id);

    if(!company) {
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

// save a seeker
router.post("/:id/saved", async(req, res, next) => {
  const id = req.params.id;

  const seeker = req.body;

  const user = await model.findById(id);
  if (!user) {
    res.status(404).json(doesntExist);
  } else if (!seeker || !seeker.seeker_id || !seeker.seeker_name) {
    return res.status(400).json(invalidSaveRequest);
  };

  try {
    res.status(201).json(await model.save(id, seeker))
  } catch (err) {
    console.log(err)
    next(err)
  };
});

// get all your saved seekers
router.get("/:id/saved", async(req, res, next) => {
  const id = req.params.id;

  const user = await model.findById(id);
  if (!user) {
    res.status(404).json(doesntExist);
  }

  try {
    res.status(200).json(await model.findSaved(id))
  } catch (err) {
    console.log(err)
    next(err)
  }
});

// find a saved seeker by id
router.get("/:id/saved/:seek_id", async (req, res, next) => {
  const id = req.params.id;
  const seek_id = req.params.seek_id;

  try {
    const company = await model.findById(id);
    if (!company) {
      return res.status(404).json(doesntExist);
    } else {
      const savedSeeker = await model.findSavedById(id, seek_id)
      if (savedSeeker.length < 1) {
        return res.status(404).json({ message: "Saved seeker not found." })
      }
      res.status(200).json(savedSeeker)
    }
  } catch (err) {
    next(err)
  }
})

// delete a seeker from saved
router.delete("/:id/saved/:seek_id", async (req, res, next) => {
  const id = req.params.id;
  const seek_id = req.params.seek_id;

  try {
    const company = await model.findById(id);
    if (!company) {
      return res.status(404).json(doesntExist);
    } else {
      const deleted = await model.removeSaved(id, seek_id)
      if (deleted.numberOfDeletedRecords === 0) {
        return res.status(404).json({ message: "Saved seeker not found." })
      }
      res.status(200).json(deleted)
    }
  } catch (err) {
    next(err)
  }
})

// delete a company
router.delete("/:id", authenticate, async (req, res, next) => {
  const id = req.params.id;

  const user = await model.findById(id);
  if (!user) {
    res.status(404).json(doesntExist);
  };

  try {
    res.status(200).json(await model.remove(id))
  } catch (err) {
    console.log(err)
    next(err)
  };
});

module.exports = router;