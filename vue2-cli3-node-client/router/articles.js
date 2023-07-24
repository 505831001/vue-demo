// 文章的路由模块

const express = require('express');
const router = express.Router();

// 导入需要的处理函数模块
const articlesHandler = require('../router_handler/articles-handler.js');

// 导入 multer 和 path
const multer = require('multer');
const path = require('path');

// 创建 multer 的实例
const uploads = multer({ dest: path.join(__dirname, '../uploads') });
// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
// 导入需要的验证规则对象
const { add_article_schema } = require('../schema/articles-schema.js');

// 获取文章列表的路由
router.get('/list', articlesHandler.paginationQueryList);
// 发布文章的路由
router.post('/add', uploads.single('cover_img'), expressJoi(add_article_schema), articlesHandler.addArticle);

module.exports = router;



