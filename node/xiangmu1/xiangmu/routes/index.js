var express = require('express');
var router = express.Router();
var mongo=require("./mogofz.js");

var md5=require('md5-node'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.redirect("../public/login.html")
});
router.get('/getdata1',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  if(req.query.name!=''&& req.query.name!=undefined && req.query.pas!=''&& req.query.pas!=undefined){
    var token = req.query.pas * 0.2546 * 100
    res.send({
      "success": "请求成功",
      'name':req.query.name,
      'pas':req.query.pas,
      'token':token
    })
  }else {
    res.send({'error':'缺少参数'})
  }
})
router.post('/postdata1',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  if(req.body.name!=''&& req.body.name!=undefined && req.body.pas!=''&& req.body.pas!=undefined){
    var token = req.body.pas * 0.45135 * 50
    res.send({
      "success": "请求成功",
      'name':req.body.name,
      'pas':req.body.pas,
      'token':token
    })
  }else {
    res.send({'error':'缺少参数'})
  }
})

router.post('/userlist', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // 搜索
  if(req.body.username){
  	  mongo("find","usersurface",{username:{$regex:req.body.username,$options:"$i"}},function(data){
	  	res.send(data)
	  })
  }else{
  	mongo("find","usersurface",{},function(data){
	  	res.send(data)
	  })
  }
});


router.post('/shopClassify',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  mongo("find","shopClassify",{},function(data){
    res.send(data)
  })
})

module.exports = router;
