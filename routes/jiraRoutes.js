const express = require('express');
const router = express.Router();
const jiraController = require('../controllers/jiraController');

router.get('/', jiraController.renderUsers);

module.exports = router;
