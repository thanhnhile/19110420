const express = require('express');
const router = express.Router();
const controllers = require('../controllers/messageController');

router.get('',controllers.getAllMemberMessage);
router.get('/:id',controllers.getMemberMessage);

module.exports = router;