1. mysql 查询数据
    select * from 表名称
    select * from 表名称 where userName=? and userPwd=?




connection.query('select * from 表名称 where userName=? and userPwd=?', [第一个？,第二个？], (err, results, fields) => {}
)















