const express = require('express');
const router = express.Router();
const controllers = require('../controllers/19110420Controller');

router.get('/:id',controllers.getMemberReq);
router.post('',controllers.postMemberReq);

module.exports = router;