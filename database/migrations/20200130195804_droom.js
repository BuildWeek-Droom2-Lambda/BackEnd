
exports.up = async function(knex) {
  await knex.schema.createTable("companies", tbl => {
    tbl.increments()
    tbl.string("name", 64)
      .notNullable()
      .unique()
    tbl.text("password")
      .notNullable()
    tbl.string("location", 64)
    tbl.text("bio")
  });

  
  await knex.schema.createTable("seekers", tbl => {
    tbl.increments()
    tbl.string("name", 64)
      .notNullable()
      .unique()
    tbl.text("password")
      .notNullable()
    tbl.string("location", 64)
    tbl.text("skills")
    tbl.text("experience")
  });
  
  await knex.schema.createTable("jobs", tbl => {
    tbl.increments()
    tbl.string("name", 64)
      .notNullable()
    tbl.string("location", 64)
      .notNullable()
    tbl.text("description")
      .notNullable()
    tbl.integer("salary")
      .unsigned()
    tbl.integer("company_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("companies")
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  });

  await knex.schema.createTable("seekersSaved", tbl => {
    tbl.string("id")
      .notNullable()
    tbl.string("job_id")
      .notNullable()
    tbl.string("job_name", 64)
      .notNullable()
    tbl.string("job_location", 64)
      .notNullable()
    tbl.text("job_description")
      .notNullable()
    tbl.integer("job_salary")
      .unsigned()
    tbl.integer("job_company_id")
      .unsigned()
      .notNullable()
  });

  await knex.schema.createTable("companiesSaved", tbl => {
    tbl.string("id")
      .notNullable()
    tbl.string("seeker_id")
      .notNullable()
    tbl.string("seeker_name", 64)
      .notNullable()
      .unique()
    tbl.string("seeker_location", 64)
    tbl.text("seeker_skills")
    tbl.text("seeker_experience")
  });

};


exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("companiesSaved");
  await knex.schema.dropTableIfExists("seekersSaved");
  await knex.schema.dropTableIfExists("seekers");
  await knex.schema.dropTableIfExists("jobs");
  await knex.schema.dropTableIfExists("companies");
};
