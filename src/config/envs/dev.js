module.exports = {
  // mysql 的配置
  mysqlConfig: {
    host: 'localhost',
    user: 'root',
    password: 'xiaowei123',
    port: '3306',
    database: "imooc_lego_course"
  },
  // mongodb 连接配置
  mongodbConf: {
    host: 'localhost',
    port: '27017',
    dbName: 'imooc_lego_course',
  },

  // redis 连接配置
  redisConf: {
    port: '6379',
    host: '127.0.0.1',
  },
}