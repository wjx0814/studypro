var express = require("express"); //首先引入express模块，不了解去看nodejs教程 安装：npm install express --save
 
var app = express();
 
var fs = require("fs"); // 文件系统，引入user.json的工具
 
var cors = require("cors");// 这个比较重要，解决跨域问题， 也要npm install cors -- save
 
 
 
app.use(cors({
 
origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）
 
methods: ["GET", "POST"],
 
alloweHeaders: ["Content-Type", "Authorization"]
 
}))
 
 
 
app.get("/user", function (req, res) { //"/user" 是自定义的，用于显示在地址栏
 
fs.readFile(__dirname + "/" + "user.json", "utf-8", function (err, data) { // __dirname是文件夹的名，我们用fs读取user.json
 
res.end(data) // 然后把读取的文件通过 res.end()发送给客户端
 
})
 
});
 
var server = app.listen(3000, function () { // 设置服务端端口为3000,即：http://127.0.0.1:3000
 
var host = server.address().address
 
var port = server.address().port
 
console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})