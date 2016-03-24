var app = [];

//中间件和路由是放在一起的，在一条线上，没太大区别，只不过中间件能往下传递，路又不能往下传递

app.push(function(req,res,next){
    console.log(1);
    next("error");
});

app.push(function(req,res,next){
    console.log(2);
    next();
});

app.push(function(err,req,res,next){
    console.log(3);
});

//for(var i=0;i<app.length;i++){
//
//}
//循环数组 一般写递归

/*
//真正的原理不是这样
var i=0;
function next(err){
    var fn = app[i];
    try{
        fn(req,res,next);
    }catch(err){
        if(fn.length == 4){
            fn();
        }else{
            next();
        }
    }
}
next();
*/

var i=0;
var req,res;
function next(err){
    var fn = app[i++];//取出每个中间件函数
    if(err){
        if(fn.length == 4){
            fn(req,res,next);
        }else{
            next(err);
        }
    }else{
        fn(req,res,next);
    }
}
next();