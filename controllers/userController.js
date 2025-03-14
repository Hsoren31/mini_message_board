import { getUserByName } from "../db.js";

async function getUserDataByName(req, res) {
  const { userId } = req.params;

  const userData = await getUserByName(String(userId));

  if (!userData) {
    res.status(404).send("User not found.");
    return;
  }

  res.render("userMessages", {
    title: userData.user.user,
    messages: userData.userMessages,
  });
}

export { getUserDataByName };
