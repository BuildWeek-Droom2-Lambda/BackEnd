const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find() {
  return db("companies")
    .select("id", "name", "location", "bio")
    .orderBy("id", "asc")
}

function findBy(filter) {
  return db("companies")
    .where(filter)
    .select("id", "name", "password")
}

function findById(id) {
  return db("companies")
    .where({ id })
    .first()
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("companies").insert(user)
  return findById(id)
}

async function update(id, updates) {
  await db("companies")
    .where({ id })
    .update(updates)
    
  return findById(id)
    .select("id", "name", "location", "bio")
};

function remove(id) {
  return db("companies")
    .where({ id })
    .del()
};

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove
}