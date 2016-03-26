//要求下面的路由必须登录后才能访问
exports.checkLogin = function(req,res,next){
    if(req.session.user){
        next();
    }else{
        req.flash('error','未登录');//加一个错误提示
        res.redirect('/users/login');
    }
}
//要求下面的路由必须未登录才能访问
exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        req.flash('error','已登录');//加一个错误提示
        res.redirect('/');//重定位到首页
    }else{
        next();
    }
}
