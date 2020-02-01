const router = require("express").Router();
const seekersModel = require('../seekers/seekersModel');
const companiesModel = require('../companies/companiesModel');
const generateToken = require('./generateToken');
const bcrypt = require("bcryptjs");

const SEEKER = "seeker";
const COMPANY = "company";

const errorMessage = { 
  message: 'You must include a name and password in your request.'
}

const notFound = {
  message: 'Account not found. Are you sure you entered the correct user type?'
}

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body

    if (!user || !user.name || !user.password) {
      return res.status(401).json(errorMessage)
    }

    const userToPost = { name: user.name, password: user.password }

    // Switch the table to post the user to, based on the type.
    switch(user.type) {
      case SEEKER:
        // add to seekers table
        const savedSeeker = await seekersModel.add(userToPost)
        res.status(201).json(savedSeeker)
        break;
      case COMPANY:
        // add to companies table
        const savedCompany = await companiesModel.add(userToPost)
        res.status(201).json(savedCompany)
        break;
      default:
        res.status(400).json({ message: 'You must include a valid user type in your request.' })
    }

  } catch (err) {
    console.log(err)
    next(err)
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { name, password, type } = req.body

    // validate the user against the correct table based on type input
    switch(type) {
      case SEEKER:
        // look for the user in the seekers table
        const seeker = await seekersModel.findBy({ name }).first()

        if (!seeker) {
          return res.status(404).json(notFound)
        }

        const validSeekerPassword = await bcrypt.compare(password, seeker.password)
        
        if (!validSeekerPassword) {
          return res.status(401).json({ message: 'Incorrect password.' })
        }
        
        if (seeker && validSeekerPassword) {
          const tokenS = generateToken(seeker)
          return res.status(200).json({ token: tokenS, message: `Welcome ${seeker.name}!` })
        } else {
          return res.status(401).json(errorMessage)
        }
        
      case COMPANY:
        // look for the user in the companies table
        const company = await companiesModel.findBy({ name }).first()
        const validCompanyPassword = await bcrypt.compare(password, company.password)

        if (!company) {
          return res.status(404).json(notFound)
        };

        if (!validCompanyPassword) {
          return res.status(401).json({ message: 'Incorrect password.' })
        };

        if (company && validCompanyPassword) {
          const tokenC = generateToken(company)
          return res.status(200).json({ token: tokenC, message: `Welcome ${company.name}!` })
        } else {
          return res.status(401).json(errorMessage)
        }
      default:
        res.status(400).json({ message: 'You must include a valid user type in your request.' })
    }

  } catch (err) {
    console.log(err)
    next(err)
  }
});

module.exports = router;