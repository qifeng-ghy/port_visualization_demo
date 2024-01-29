//后端服务器
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = '3000';
//mysql驱动
const mysql = require('mysql');


// 创建与MySQL数据库的连接  
const connection = mysql.createConnection({
    // port: '3306',
    host: 'localhost', // 数据库服务器地址  
    user: 'root', // 数据库用户名  
    password: '12345678', // 数据库密码  
    database: 'portdata' // 数据库名称  
});

// 连接数据库  
connection.connect((err) => {
    if (err) console.log(err);
    console.log('Connected to MySQL database!');
});



//获得所有港口信息
app.get('/getAll', (req, res) => {
    connection.query('SELECT * FROM t_port', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);

        }
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});


//（1）获取港口名称和港口流量
app.get('/getPort', (req, res) => {
    const { limit = 5 } = req.query; // 从查询参数中获取limit值  
    const query = 'SELECT t_name, t_amount FROM t_port ORDER BY t_amount DESC LIMIT ?';
    connection.query(query, [limit], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});

//（2）根据地点返回具体的流量值
app.get('/findPort', (req, res) => {
    const location = req.query.portName;
    console.log(req.query);
    connection.query('SELECT * FROM t_port WHERE t_name = ?', [location], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        results=results.map(item=>camelCaseKeys(item));
        // console.log(results);
        return res.json(results);
    });
});

//（3）获取港口类型（港口和锚地）
app.get('/getType', (req, res) => {
    const query = 'SELECT * FROM t_port';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        return res.json(results);
    });
});

//（4）统计中国领海各区域港口总数（eg.内陆、渤海、黄海、东海、南海）
//4.1内陆
app.get('/land', (req, res) => {
    const query = 'SELECT * FROM t_port WHERE t_localtion = "内陆"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        // return 5;
        return res.json(results);
   
    });
});
//4.2渤海
app.get('/bohai', (req, res) => {
    const query = 'SELECT * FROM t_port WHERE t_localtion = "渤海"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});
//4.3黄海
app.get('/huanghai', (req, res) => {
    const query = 'SELECT * FROM t_port WHERE t_localtion = "黄海"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});
//4.4东海
app.get('/donghai', (req, res) => {
    const query = 'SELECT * FROM t_port WHERE t_localtion = "东海"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});
//4.5南海
app.get('/nanhai', (req, res) => {
    const query = 'SELECT * FROM t_port WHERE t_localtion = "南海"';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        // console.log(results);
        results=results.map(item=>camelCaseKeys(item));
        return res.json(results);
    });
});


//（6）获取港口货物信息（新增）
app.get('/getGoods', (req, res) => {
    const location = req.query.portName;
    console.log(req.query);
    connection.query('SELECT * FROM t_port_goods WHERE t_name = ?', [location], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        results = results.map(item => camelCaseKeys(item));
        // console.log(results);
        return res.json(results);
    });
});

//（7）根据港口所在区域返回所有符合条件的港口（新增）
app.get('/getPortByLoc', (req, res) => {
    const location = req.query.portLocation;
    // console.log(req.query);
    connection.query('SELECT * FROM t_port WHERE t_localtion = ?', [location], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        results = results.map(item => camelCaseKeys(item));
        // if (!Array.isArray(results)) {
        //     return res.status(500).send("Query didn't return an array");
        // }console.log(results);
        // console.log(res.json(results));
        // return res.json(results);
        // const jsonArray = results.map(result => {
        //     return {
        //         portName: result.tName,
        //         tAmount: result.tAmount,
        //         // Add more properties as needed
        //     };
        // });
        return res.json(results);
    });
});




// 启动服务器监听端口3000（可以根据需要更改）  
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});

function camelCaseKeys(obj) {
    const result = {};
    for (let key in obj) {
        let newKey = key[0].toLowerCase() + key.slice(1).replace(/_([a-z])/g, function($0,$1){return $1.toUpperCase();});
        result[newKey] = obj[key];
    }
    return result;
}