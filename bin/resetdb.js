// load .env data into process.env
require("dotenv").config();

// other dependencies
const fs = require("fs");
const { Client } = require("pg");
const dbParams = require("../server/lib/db.js");
const db = new Client(dbParams);

// PG connection setup
// const connectionString = process.env.DATABASE_URL ||
//   `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
// const client = new Client();

// Loads the schema files from db/schema
const runSchemaFiles = async () => {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync("./server/db/schema");

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./server/db/schema/${fn}`, "utf8");
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync("./server/db/seeds");

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./server/db/seeds/${fn}`, "utf8");
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  try {
    dbParams.host &&
      console.log(`-> Connecting to PG on ${dbParams.host} as ${dbParams.user}...`);
    dbParams.connectionString &&
      console.log(`-> Connecting to PG with ${dbParams.connectionString}...`);
    await db.connect();
    await runSchemaFiles();
    await runSeedFiles();
    db.end();
  } catch (err) {
    console.error((`Failed due to error: ${err}`));
    db.end();
  }
};

runResetDB();
