var express = require('express');
var router = express.Router();

var mongo=require("../lib/mogofz.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 登录
router.post('/login', function(req, res, next) {
  mongo("find","userinfos",{username:{$regex:req.body.username,$options:"$i"}},function(data){
    // res.send(data)
    if(data.length!=0){
      mongo("find","userinfos",{pas:Number(req.body.pas)},function(data){
        if(data.length!=0){
          res.send('登录成功')
        }else {
          res.send('密码错误')
        }
      })
    }else {
      res.send('账号不存在')
    }
  })
});




module.exports = router;
