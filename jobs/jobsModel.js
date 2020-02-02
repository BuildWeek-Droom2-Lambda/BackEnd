const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find() {
  return db("jobs")
}

function findBy(filter) {
  return db("jobs").where(filter)
}

async function findById(id) {
  const job = await db("jobs").where({ id })
  return job.length === 0 ? null : job
}

async function add(job) {
  const [id] = await db("jobs").insert(job)
  return findById(id)
}

async function update(id, updates) {
  const updated = await db("jobs").where({ id }).update(updates)
  console.log(updated)
  return findById(id)
}

function remove(id) {
  return db("jobs").where({ id }).del()
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
}