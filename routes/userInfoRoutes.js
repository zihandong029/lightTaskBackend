const express = require('express');
const userInfoController = require('../controllers/userInfoController');

const router = express.Router();

router.get('/getAllUserInfo', userInfoController.getAllUsers);

module.exports = router;
