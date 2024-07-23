const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/register',
  [
    check('username', '用户名为必填项').not().isEmpty(),
    check('password', '密码长度至少为6个字符').isLength({ min: 6 })
  ],
  authController.register
);

router.post(
  '/login',
  [
    check('username', '用户名为必填项').not().isEmpty(),
    check('password', '密码为必填项').exists()
  ],
  authController.login
);

module.exports = router;
