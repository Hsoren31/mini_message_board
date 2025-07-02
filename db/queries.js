const pool = require("./pool");

async function getUser(username) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = ($1)",
    [username]
  );
  return rows;
}

async function insertMessage(user, message) {
  let userDb = await getUser(user);
  if (!Array.isArray(userDb) || !userDb.length) {
    await pool.query("INSERT INTO users (username) VALUES ($1)", [user]);
    userDb = await getUser(user);
  }
  await pool.query(
    "INSERT INTO messages (user_id, message, timestamp) VALUES ($1, $2, $3)",
    [userDb[0].id, message, formatDate(new Date())]
  );
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

function formatDate(date) {
  date = date.toString();
  const year = date.slice(11, 16);
  const month = date.slice(4, 7);
  const day = date.slice(8, 10);
  const time = date.slice(16, 21);

  return `${day}/${month}/${year}${time}`;
}

module.exports = { getUser, insertMessage, getAllMessages };
