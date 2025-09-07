const User = require("../schemas/User");

async function addUser(req, res) {
  const username = req.body.username;
  const newUser = new User({ username: username });
  let addedUser;
  try {
    addedUser = await newUser.save();
  } catch (error) {
    console.error(error);
  }

  res.json({ username: addedUser.username, _id: addedUser.id });
}

async function fetchUsers(req, res) {
  let fetchedUsers;
  try {
    fetchedUsers = await User.find();
  } catch (error) {
    console.error(error);
  }
  res.json(fetchedUsers);
}

module.exports = { addUser, fetchUsers };
