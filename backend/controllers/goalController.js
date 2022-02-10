const asyncHandler = require('express-async-handler');

//@desc Get goals
//@route Get /api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'goals' });
});

//@desc Post goals
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.test) {
    res.status(400);
    throw new Error('Please, test is required');
  }
  res.status(200).json({ message: 'Goal set successfully' });
});

//@desc Update goals
//@route UPDATE /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc  Delete goals
//@route DELETE /api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
