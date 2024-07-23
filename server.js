const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// 连接 MongoDB
require('./db');

// 引入认证控制器
const authController = require('./controllers/authController');

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 路由
app.use('/api/auth', authController);

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
