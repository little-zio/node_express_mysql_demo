1. mysql 查询数据
    select * from 表名称
    select * from 表名称 where userName=? and userPwd=?



<!-- ?就是占位符，用于防止SQL注入 -->
connection.query('select * from 表名称 where userName=? and userPwd=?', [第一个？,第二个？], (err, results, fields) => {}
)

2. mysql 插入数据
    insert into 表名称 values (?, ?)
connection.query('insert into 表名称 values (?, ?)', [第一个？,第二个？], (err, results, fields) => {}
)

自增长的键值用 0 [0, userName, userPwd]











