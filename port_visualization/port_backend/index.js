//后端服务器


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000; // 选择一个端口号

//mysql驱动
const mysql = require('mysql');  

// 创建与MySQL数据库的连接  
const connection = mysql.createConnection({  
    host: 'localhost', // 数据库服务器地址  
    user: 'root', // 数据库用户名  
    password: '12345678', // 数据库密码  
    database: 'port' // 数据库名称  
});  

// 连接数据库  
connection.connect((err) => {  
    if (err) throw err;  
    console.log('Connected to MySQL database!');  
});  


// 定义一个简单的路由
app.get('/helloworld', (req, res) => {
    res.send('Hello from Node.js backend!');
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});