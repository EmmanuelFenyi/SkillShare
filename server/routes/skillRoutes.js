const express = require('express');
const { addSkill, getSkills } = require('../controllers/skillController');
const router = express.Router();

router.route('/').post(addSkill).get(getSkills);

module.exports = router;
