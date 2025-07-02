#! /usr/bin/env node
const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (25)
);
  
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR (255),
  timestamp VARCHAR (20),
  user_id INTEGER REFERENCES users
);

INSERT INTO users (username) VALUES ('Bryan'), ('Odin'), ('Damon');

INSERT INTO messages (message, timestamp, user_id) VALUES
  ('Hi', '02/07/2025 11:10', 1),
  ('What is up', '03/01/2023 05:00', 2),
  ('Lets go', '11/12/2005 03:45', 3);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
