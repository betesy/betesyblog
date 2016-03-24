var express = require('express');
//这是一个路由的实例
var router = express.Router();


//---------------像一个子系统，也可以用中间件-----------
router.use(function(req,res,next){
  console.log('use');
  next();
});
//-------------------/----------------------------


/* GET home page. */
//当用户访问/的时候，执行对应的回调函数
router.get('/', function(req, res, next) {
  //用数据渲染模板
  res.render('index', { title: '<h1>Express</h1>' });
});

module.exports = router;
