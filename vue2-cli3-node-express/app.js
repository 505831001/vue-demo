// 第00步：下载第三方模块依赖包Express
// # npm install express@4.18.2

// 第01步：导入第三方模块依赖包Express
const express = require('express');
const history = require('connect-history-api-fallback');

// 第02步：创建服务器的实例对象
const app = express();

app.use(history());

// 第04步：托管静态资源文件
app.use(express.static(__dirname + '/static'));

// 第05步：测试请求
app.get('/test', function (request, response) {
  response.send({
    name: 'Okay',
    age: 28
  });
});

// 第03步：启动服务器
// 第06步：启动命令（node ./app.js）
app.listen(3008, function (error) {
  if (!error) {
    console.log('api server running at http://127.0.0.1:3008');
  }
});