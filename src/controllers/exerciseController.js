const Exercise = require("../schemas/Exercise");
const User = require("../schemas/User");

async function addExercise(req, res) {
  const user_id = req.params._id;
  const { description, duration, date } = req.body;

  let user;
  let newExercise;
  let addedExercise;

  try {
    user = await User.findById(user_id);

    newExercise = new Exercise({
      user_id: user_id,
      username: user.username,
      description: description,
      duration: duration,
      date: date ? new Date(date) : new Date(),
    });
    addedExercise = await newExercise.save();

    const userObj = {
      _id: user._id,
      username: user.username,
      description: addedExercise.description,
      duration: addedExercise.duration,
      date: new Date(addedExercise.date).toDateString(),
    };

    res.json(userObj);
  } catch (error) {
    console.error(error);
    return;
  }
}

module.exports = { addExercise };
