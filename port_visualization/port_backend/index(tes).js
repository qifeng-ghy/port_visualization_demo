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

app.get('/getAll',(req,res) =>{
    const result=[
        {name:'上海',tAccount:3844},
        {name:'广州',tAccount:3744},
        {name:'南京',tAccount:3244},
        {name:'南通',tAccount:3137},
        {name:'宁波',tAccount:3099},
        {name:'天津',tAccount:3034},
        {name:'秦皇岛',tAccount:2945},
        {name:'唐山',tAccount:2788},
        {name:'厦门',tAccount:2704},
        {name:'舟山',tAccount:2528},
        {name:'威海',tAccount:2476},
        {name:'日照',tAccount:2294},
        {name:'青岛',tAccount:2024},
        {name:'镇江',tAccount:1766},
        {name:'泉州',tAccount:1624},
        {name:'珠海',tAccount:1578},
        {name:'北海',tAccount:1344},
        {name:'海口',tAccount:1244},
        {name:'三亚',tAccount:1024},
        {name:'宜宾',tAccount:944},
        {name:'重庆',tAccount:878},
        {name:'烟台',tAccount:654},
        {name:'连云港',tAccount:444},
        {name:'锦州',tAccount:244},
        // {}
    ];
    res.send(result);
});

app.get('/getPort',(req,res)=>{
    let result={
        name:'上海',
        tLocation:'东海',
        tAmount:3900,
        tBlance:178
    }
    res.send(result);
});




// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});