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
    .select("id", "name", "location", "bio")
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)
  const [id] = await db("companies").insert(user)
  return findById(id)
}

async function save(id, seeker) {
  await db("companiesSaved").insert({ 
    id, 
    seeker_id: seeker.seeker_id,
    seeker_name: seeker.seeker_name,
    seeker_location: seeker.seeker_location,
    seeker_skills: seeker.seeker_skills,
    seeker_experience: seeker.seeker_experience
  })
  return db("companiesSaved").where({seeker_id: seeker.seeker_id})
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

function findSaved(id) {
  return db("companiesSaved").where({ id })
}

function findSavedById(id, seeker_id) {
  return db("companiesSaved").where({ id, seeker_id })
}

async function removeSaved(id, job_id) {
  const deleted = await findSavedById(id, job_id)
    .del()
  return { numberOfDeletedRecords: deleted }
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  save,
  update,
  remove,
  findSaved,
  findSavedById,
  removeSaved
}