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

app.get('/huanghai',(req,res)=>{
    const huanghai=[
        {name:'连云港',value:23},
        {name:'南通',value:23},
        {name:'日照',value:23},
        {name:'青岛',value:23},
        {name:'张家港',value:23},
    ];
    res.send(huanghai);
});

app.get('/donghai',(req,res)=>{
    const donghai=[
        {name:'上海',value:23},
        {name:'宁波',value:23},
        {name:'台州',value:23},
        {name:'舟山',value:23},
        {name:'温州',value:23},
    ];
    res.send(donghai);
});

app.get('/bohai',(req,res)=>{
    const bohai=[
        {name:'秦皇岛',value:23},
        {name:'唐山',value:23},
        {name:'天津',value:23},
        {name:'大连',value:23},
        {name:'威海',value:23},
    ];
    res.send(bohai);
});
app.get('/nanhai',(req,res)=>{
    const nanhai=[
        {name:'防城港',value:23},
        {name:'广州',value:23},
        {name:'三亚',value:23},
        {name:'海口',value:23},
        {name:'深圳',value:23},
    ];
    res.send(nanhai);
});
app.get('/land',(req,res)=>{
    const land=[
        {name:'重庆',value:23},
        {name:'宜宾',value:23},
        {name:'泸州',value:23},
        {name:'南京',value:23},
        {name:'镇江',value:23},
        {name:'扬州',value:24}
    ];
    res.send(land);
});
// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});