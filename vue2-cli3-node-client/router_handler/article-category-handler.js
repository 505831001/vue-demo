// 这是路由处理函数模块

// 导入第三方模块
const uuid = require('node-uuid');
// 导入数据库操作模块
const db = require('../db/postgresql.js');

// 获取文章分类列表的处理函数
exports.getArtCates = (req, res) => {
  // 定义查询分类列表数据的 SQL 语句
  // const sql = `select * from ev_article_cate where is_delete='0'`;
  const sql = `select * from ev_article_cate`;
  // 调用 db.query() 执行 SQL 语句
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    res.send({
      status: 0,
      message: '获取文章分类数据成功！！！！！！',
      data: results.rows,
    });
  });
}

// 新增文章分类的处理函数
exports.addArticleCates = (req, res) => {
  // console.log(req.body);
  // 1. 定义查重的 SQL 语句
  const sql = `select * from ev_article_cate where name=$1 and alias=$2`;
  // 2. 执行查重的 SQL 语句
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // 3. 判断是否执行 SQL 语句失败
    if (err) return res.cc(err)

    if (results.rowCount === 0) {
      console.log(results.rowCount);
    } else {
      return res.cc('分类名称与分类别名被占用，请更换后重试！');
    }

    // 定义插入文章分类的 SQL 语句
    const okay = uuid.v4().toString().replaceAll("-", "");
    console.log(okay);
    const sql = "insert into ev_article_cate (id,name,alias,is_delete) values ('" + okay + "',$1,$2,0)";
    // 执行插入文章分类的 SQL 语句
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
      if (err) {
        console.log(err);
        return res.cc(err);
      }
      if (results.rowCount === 1) {
        console.log(results);
      }
      // if (results.affectedRows !== 1) return res.cc('新增文章分类失败！')
      res.cc('新增文章分类成功！', 0);
    })
  })
}

// 删除文章分类的处理函数
exports.deleteCateById = (req, res) => {
  console.log(req.user);
  console.log(req.body);
  console.log(req.params);
  // 定义标记删除的 SQL 语句
  const sql = `update ev_article_cate set is_delete=1 where id=$1`;
  // 调用 db.query() 执行 SQL 语句
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.cc(err);
    }
    if (results.rowCount === 1) {
      console.log(results.rowCount);
    } else {
      return res.cc('删除文章分类失败！');
    }
    res.cc('删除文章分类成功！', 0);
  });
};

// 根据 Id 获取文章分类的处理函数
exports.getArtCateById = (req, res) => {
  // 定义根据 ID 获取文章分类数据的 SQL 语句
  const sql = `select * from ev_article_cate where id=$1`;
  // 调用 db.query() 执行 SQL 语句
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.cc(err)
    if (results.rowCount === 1) {
      console.log(results.rows[0]);
    } else {
      return res.cc('获取文章分类数据失败！');
    }
    res.send({
      status: 0,
      message: '获取文章分类数据成功！',
      data: results.rows[0]
    });
  });
}

// 根据 Id 更新文章分类的处理函数
exports.updateCateById = (req, res) => {
  console.log(`编辑文章详情请求接口...`);
  // 定义查重的 SQL 语句
  const sql = `select * from ev_article_cate where id=$1`;
  // 调用 db.query() 执行查重的 SQL 语句
  db.query(sql, [req.body.id], (err, results) => {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err);
    }
    if (results.rowCount === 1) {
      console.log(results.rows);
    } else {
      console.log(results.rowCount);
    }
    // 定义更新文章分类的 SQL 语句
    const sql = `update ev_article_cate set name=$1, alias=$2 where id=$3`;
    // 执行更新文章分类的 SQL 语句
    db.query(sql, [req.body.name, req.body.alias, req.body.id], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      if (results.rowCount === 1) {
        console.log(results.rowCount);
      } else {
        return res.cc('更新文章分类失败！');
      }
      res.cc('更新文章分类成功！', 0);
    });
  });
};
