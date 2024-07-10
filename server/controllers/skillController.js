const asyncHandler = require('express-async-handler');
const Skill = require('../models/Skill');

const addSkill = asyncHandler(async (req, res) => {
  const { name, category } = req.body;

  const skill = new Skill({ name, category });

  const createdSkill = await skill.save();
  res.status(201).json(createdSkill);
});

const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({});
  res.json(skills);
});

module.exports = { addSkill, getSkills };
