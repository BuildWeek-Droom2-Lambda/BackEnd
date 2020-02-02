const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
    tableName: 'dbmigrations',
  },
  seeds: {
    directory: "./database/seeds",
  },
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
  useNullAsDefault: true
}

module.exports = {

  development: {
    ...sqlite,
    connection: {
      filename: './database/users.db3'
    }
  },

  testing: {
    ...sqlite,
    connection: {
      filename: './database/usersTest.db3'
    }
  },

};