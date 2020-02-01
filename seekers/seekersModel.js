const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find() {
  return db("seekers").select("id", "name").orderBy("id", "asc")
}

function findBy(filter) {
  return db("seekers").where(filter).select("id", "name", "password")
}

function findById(id) {
  return db("seekers").where({ id }).first()
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("seekers").insert(user)
  return findById(id)
}

async function update(id, updates) {
  const updated = await db("seekers").where({ id }).update(updates)
  return findById(id)
}

function remove(id) {
  return db("seekers").where({ id }).del()
}

module.exports = {
  find,
  findBy,
  findById,
  update,
  add,
  remove
}