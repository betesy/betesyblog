//var debug = require('debug')('betesyblog:*');
//debug('debug all');

var debug = require('debug')('betesyblog:test');
debug('I am test');

//产生一个名字叫a的日志记录器
var a = require('debug')('a');
a('aaaaa');
//产生一个名字叫b的日志记录器
var b = require('debug')('b');
b('bbbb');
