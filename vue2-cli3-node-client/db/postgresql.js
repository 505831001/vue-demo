
const pg = require('pg');

const config = {
  host: "127.0.0.1",
  database: "postgres",
  user: "postgres",
  password: "12345678",
  port: "5432",
  max: 20,
  idleTimeoutMillis: 60000,
  allowExitOnIdle: true
};

const db = new pg.Pool(config);

module.exports = db;



