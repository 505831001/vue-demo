// 文章的处理函数模块
const path = require('path');
// 导入自定义模块
const db = require('../db/postgresql.js');

// 分页查询列表处理函数
module.exports.paginationQueryList = function (request, response) {
  // Node.js 中可以通过 req.query 对象来接收 GET 请求的参数。req.query 对象是一个包含所有 GET 请求参数的键值对集合。以下是接收 GET 请求参数的示例代码：
  console.log(request.query);

  // Postgres 数据库中，可以使用 LIMIT 和 OFFSET 子句来实现分页查询。下面是一个示例的分页查询 SQL 语句：
  // SELECT * FROM table_name ORDER BY column_name LIMIT page_size OFFSET (page_number - 1) * page_size;
  const sqlStr = "SELECT * FROM ev_articles ORDER BY id LIMIT $2 OFFSET ($1 - 1) * $2";

  db.query(sqlStr, [request.query.currentPage, request.query.pageSize], function (error, results) {
    if (error) {
      return response.cc(error);
    }

    if (results.rowCount === 1) {
      console.log(results.rows);
    } else {
      console.log(results.rows);
    }

    response.send({ status: 0, message: `获取文章列表成功！`, data: results.rows });
  });
}

// 发布文章的处理函数
exports.addArticle = (req, res) => {
  console.log(req.file)
  if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数！')

  // TODO：证明数据都是合法的，可以进行后续业务逻辑的处理
  // 处理文章的信息对象
  const articleInfo = {
    // 标题、内容、发布状态、所属分类的Id
    ...req.body,
    // 文章封面的存放路径
    cover_img: path.join('/static', req.file.filename),
    // 文章的发布时间
    pub_date: new Date(),
    // 文章作者的Id
    author_id: req.user.id,
  }

  const sql = `insert into ev_articles set ?`
  db.query(sql, articleInfo, (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows !== 1) return res.cc('发布新文章失败！')
    res.cc('发布文章成功！', 0)
  })
}
