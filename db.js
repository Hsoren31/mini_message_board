const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
];

async function getUserByName(userId) {
  const user = messages.find((message) => message.user === userId);
  const userMessages = messages.filter((message) => message.user === userId);
  return { user, userMessages };
}

async function addMessage(message) {
  messages.push(message);
}

function formatDate(date) {
  date = date.toString();
  console.log(date);
  const year = date.slice(11, 16);
  const month = date.slice(4, 7);
  const day = date.slice(8, 11);
  const time = date.slice(16, 21);

  return `${day}/${month}/${year} ${time}`;
}

module.exports = { messages, getUserByName, addMessage, formatDate };
