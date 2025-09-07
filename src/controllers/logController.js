const User = require("../schemas/User");
const Exercise = require("../schemas/Exercise");

async function fetchLog(req, res) {
  const user_id = req.params._id;
  const { from, to, limit } = req.query;

  try {
    const user = await User.findById(user_id);

    let dateObj = {};

    if (from) {
      dateObj["$gte"] = new Date(from);
    }

    if (to) {
      dateObj["$lte"] = new Date(to);
    }

    let filter = {
      user_id: user_id,
    };

    if (from || to) {
      filter.date = dateObj;
    }

    const exercises = await Exercise.find(filter).limit(Number(limit) ?? 500);

    const count = exercises.length;

    let logs = exercises.map((exercise) => {
      return {
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date.toDateString(),
      };
    });

    res.json({
      _id: user._id,
      username: user.username,
      count: count,
      log: logs,
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { fetchLog };
