import { getUserByName as _getUserByName } from "../db";

async function getUserByName(req, res) {
  const { userId } = req.params;

  const userData = await _getUserByName(String(userId));

  console.log(userData);

  if (!userData) {
    res.status(404).send("User not found.");
    return;
  }

  res.render("userMessages", {
    title: userData.user.user,
    messages: userData.userMessages,
  });
}

export default { getUserByName };
