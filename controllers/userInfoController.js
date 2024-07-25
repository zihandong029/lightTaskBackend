const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// 查询所有用户
router.get('/getAllUser', async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        console.error('查询用户时出错:', err);
        res.status(500).json({ error: '查询用户时出错' });
      }
});


module.exports = router;