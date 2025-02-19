const dotenv = require('dotenv');
const path = require("node:path");
dotenv.config({ path: path.join(__dirname, '../envs', 'database.env') });

const development = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": "postgres"
}

const test = {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}

const production = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": "postgres"
}

module.exports = {
  development,
  test,
  production
}