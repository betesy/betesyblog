var express = require('express');

var articleModel = require('../model/article');
var markdown = require('markdown').markdown;

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
  //res.render('index', { title: '<h1>Express</h1>' });
  //从session中获取用户信息
  //res.render('index', { user: req.session.user });
  //这个第二个参数对象最后会合并到res.locals对象上，并渲染模板
  //res.render('index', {});

  //先配置参数，然后再执行查询
  //我们查出来的user是ID，需要通过populate转成对象
  articleModel.find().populate('user').exec(function(err,articles){
    if(err){
      req.flash('error',err);
      req.redirect('/');
    }
  });

  articles.forEach(function(article){
    article.content =markdown.toHTML(article.content);
  })

  //console.log(articles);
  //读到
  res.render('index', {articles:articles});
});

module.exports = router;
