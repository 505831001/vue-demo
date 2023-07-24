// 这是文章分类的路由模块

const express = require('express');
const router = express.Router();

// 导入文章分类的路由处理函数模块
const articleCategoryHandler = require('../router_handler/article-category-handler.js');

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
// 导入需要的验证规则对象
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/article-category-schema.js');

// 获取文章分类列表数据的路由
router.get('/cates', articleCategoryHandler.getArtCates);
// 新增文章分类的路由
router.post('/addcates', expressJoi(add_cate_schema), articleCategoryHandler.addArticleCates);
// 根据 Id 删除文章分类的路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema), articleCategoryHandler.deleteCateById);
// 根据 Id 获取文章分类的路由
router.get('/select/:id', expressJoi(get_cate_schema), articleCategoryHandler.getArtCateById);
// 根据 Id 更新文章分类的路由
router.post('/updatecate', expressJoi(update_cate_schema), articleCategoryHandler.updateCateById);

module.exports = router;




