
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

  // await knex.schema.createTable("seekers_jobs", tbl => {
  //   tbl.string("seeker_id")
  //     .notNullable()
  //   tbl.string("job_id")
  //     .notNullable()
  // });

  // await knex.schema.createTable("companies_seekers", tbl => {
  //   tbl.string("company_id")
  //     .notNullable()
  //   tbl.string("seeker_id")
  //     .notNullable()
  // });

};


exports.down = async function(knex) {
  // await knex.schema.dropTableIfExists("companies_seekers");
  // await knex.schema.dropTableIfExists("seekers_jobs");
  await knex.schema.dropTableIfExists("seekers");
  await knex.schema.dropTableIfExists("jobs");
  await knex.schema.dropTableIfExists("companies");
};
