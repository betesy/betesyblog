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

var userModel = require('../model/user');
var validate = require('../middle/index.js');
var crypto = require('crypto');

//生成一个路由实例
var router = express.Router();
//用户注册  当用户通过get方法请求 /users/reg的时候，执行此回调
/*router.get('/reg',function(req,res){
  res.render('user/reg');
});*/
//要求登录前才能访问
router.get('/reg',validate.checkNotLogin,function(req,res){
  res.render('user/reg');
});
//提交用户注册的表单
router.post('/reg',validate.checkNotLogin,function(req,res){
  var user = req.body;
  user.avatar='http://secure.gravatar.com/avatar/'+md5(user.email);
  user.password = md5(user.password);
  userModel.create(user,function(err,doc){
    if(err){
      req.flash('error',err);
      res.redirect('back');//返回到上一个页面
    }else{
      //把保存之后的用户放置到此用户会话的user属性上
      req.session.user = doc;//服务器端会想服务器发一个cookie,加密字符串

      //增加一个成功的提示
      req.flash('success','注册成功');
      //类似于 req.session.success = '注册成功';

      res.redirect('/');//重定向到我们的首页
    }
  });
});

//用户登录
router.get('/login',validate.checkNotLogin,function(req,res){
  res.render('user/login');
});

//提交用户登录表单
router.post('/login',validate.checkNotLogin,function(req,res){
  //res.send('login');

  var user = req.body;
  user.password = md5(user.password);
  userModel.findOne(user,function(err,user){
    if(err){
      req.flash('error',err);
      return res.redirect('back');//返回到上一个页面
    }else{
      req.session.user = user;
      req.flash('success','登录成功');
      res.redirect('/');//重定向到我们的首页
    }
  });
});

//退出登录
router.get('/logout',validate.checkLogin,function(req,res){
  //res.render('user/logout');
  //res.send('logout');
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;

function md5(str){
  return crypto.createHash('md5')
      .update('str').digest('hex');
}