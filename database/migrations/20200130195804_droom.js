
exports.up = async function(knex) {
  await knex.schema.createTable("companies", tbl => {
    tbl.increments()
    tbl.string("name", 64)
      .notNullable()
      .unique()
    tbl.text("password")
      .notNullable()
    tbl.string("location", 64)
      .notNullable()
    tbl.text("bio")
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
  });

  await knex.schema.createTable("seekers", tbl => {
    tbl.increments()
    tbl.string("username", 64)
      .notNullable()
      .unique()
      tbl.text("password")
      .notNullable()
    tbl.string("location", 64)
      .notNullable()
    tbl.text("skills")
    tbl.text("experience")
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("seekers");
  await knex.schema.dropTableIfExists("jobs");
  await knex.schema.dropTableIfExists("companies");
};
