// 第00步：下载第三方模块依赖包Express
// # npm install express@4.18.2

// 第01步：导入第三方模块依赖包Express
const express = require('express');
// 导入
const joi = require('@hapi/joi');
// 导入并配置 cors 中间件
const cors = require('cors');

// 第02步：创建服务器的实例对象
const app = express();

app.use(cors());
// 配置解析表单数据的中间件，注意：这个中间件，只能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 第04步：托管静态资源文件
app.use('/static', express.static('./static'));

// 一定要在路由之前，封装 res.cc 函数
app.use((req, res, next) => {
  // status 默认值为 1，表示失败的情况
  // err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  }
  next();
});

// 一定要在路由之前配置解析 Token 的中间件
const expressJWT = require('express-jwt');
const config = require('./config.js');

app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }));

// 导入并使用用户路由模块
const userRouter = require('./router/user.js');
app.use('/api', userRouter);
// 导入并使用用户信息的路由模块
const userInfoRouter = require('./router/user-info.js');
app.use('/my', userInfoRouter);
// 导入并使用文章分类的路由模块
const articleCategoryRouter = require('./router/article-category.js');
app.use('/my/article', articleCategoryRouter);
// 导入并使用文章的路由模块
const articlesRouter = require('./router/articles.js');
app.use('/my/article', articlesRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err);
  // 身份认证失败后的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！');
  // 未知的错误
  res.cc(err);
});

// 第05步：测试请求
app.get('/test', function (request, response) {
  response.send({
    name: 'Okay',
    age: 28
  });
});

// 第03步：启动服务器（启动命令：node ./app.js）
// 第06步：启动命令（node ./app.js）
app.listen(3007, () => {
  console.log('api server running at http://127.0.0.1:3007');
});



