// 引入此模块
var mongoose = require('mongoose');

//连接数据库
//mongoose.connect('mongodb://123.57.143.189:27017/betesyblog');
//定义模型，  1 集合的名称
/*mongoose.model('user',new mongoose.Schema({
 username:String,
 password:String
 }));*/
//定义模型 确定数据库里表结构
var userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
});
//再定义model
var userModel = mongoose.model('user',userSchema);

module.exports = userModel;
