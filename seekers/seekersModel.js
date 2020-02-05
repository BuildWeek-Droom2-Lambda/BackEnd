const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find() {
  return db("seekers")
    .select("id", "name", "location", "skills", "experience")
    .orderBy("id", "asc")
}

function findBy(filter) {
  return db("seekers")
    .where(filter)
}

function findById(id) {
  return db("seekers")
    .where({ id })
    .first()
    .select("id", "name", "location", "skills", "experience")
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("seekers").insert(user)
  return findById(id)
}

async function save(id, job) {
  console.log(job)
  await db("seekersSaved").insert({ 
    id, 
    job_id: job.job_id,
    job_name: job.name,
    job_location: job.location,
    job_description: job.description,
    job_salary: job.salary,
    job_company_id: job.company_id
  })
  return db("seekersSaved").where({job_id: job.job_id})
}

async function update(id, updates) {
  await db("seekers")
    .where({ id })
    .update(updates)
  return findById(id)
}

function remove(id) {
  return db("seekers")
    .where({ id })
    .del()
}

module.exports = {
  find,
  findBy,
  findById,
  update,
  add,
  save,
  remove
}