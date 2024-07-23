const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// 注册接口
router.post('/register', async (req, res) => {

  const { username, password } = req.body;
  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: '注册成功b' });
  } catch (error) {
    res.status(500).json({ error: '注册失败，请重试b' });
  }
});

// 登录接口
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password == user.password;

    if (!isMatch) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: '登录失败，请重试' });
  }
});

module.exports = router;
