/*var express = require('express');
var router = express.Router();*/

/* GET users listing. */
//当用户访问/的时候，执行此的回调函数
//这里的/是指当前路由下的根目录/,也就是/users/，不包含一级根目录
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//--------------访问reg 路由/users/reg-----------------
router.get('/reg', function(req, res, next) {
  res.send('respond with a resource');
});
//-------------/访问reg------------------

module.exports = router;*/

/*项目开始*/
var express = require('express');
//生成一个路由实例
var router = express.Router();
//用户注册  当用户通过get方法请求 /users/reg的时候，执行此回调
router.get('/reg',function(req,res){
  res.render('user/reg');
});
//提交用户注册的表单
router.post('/reg',function(req,res){
  res.send('reg');
});

//用户登录
router.get('/login',function(req,res){
  res.render('user/login');
});
router.post('/login',function(req,res){
  res.send('login');
});

//退出登录
router.get('/logout',function(req,res){
  //res.render('user/logout');
  res.send('logout');
});

module.exports = router;
