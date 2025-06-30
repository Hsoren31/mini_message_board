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

async function addMessage(user, message) {
  messages.push({
    user,
    text: message,
    added: formatDate(new Date()),
  });
}

function formatDate(date) {
  date = date.toString();
  const year = date.slice(11, 16);
  const month = date.slice(4, 7);
  const day = date.slice(8, 11);
  const time = date.slice(16, 21);

  return `${day}/${month}/${year} ${time}`;
}

module.exports = { messages, getUserByName, addMessage, formatDate };
