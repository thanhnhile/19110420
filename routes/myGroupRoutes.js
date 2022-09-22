const express = require('express');
const router = express.Router();
const controllers = require('../controllers/myGroupController');

router.get('',controllers.getMyGroupReq);

module.exports = router;
 