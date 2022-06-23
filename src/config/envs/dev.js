module.exports = {
  // mysql 的配置
  mysqlConfig: {
    host: "localhost",
    user: "root",
    password: "xiaowei123",
    port: "3306",
    database: "imooc_lego_course",
  },
  // mongodb 连接配置
  mongodbConf: {
    host: "localhost",
    port: "27017",
    dbName: "imooc_lego_course",
  },

  // redis 连接配置
  redisConf: {
    port: "6379",
    host: "127.0.0.1",
    password: "xiaowei123",
  },

  // cors origin
  corsOrigin: "*",

  // 短信验证码缓存时间，单位 s
  msgVeriCodeTimeout: 2 * 60,

  // jwt 过期时间
  jwtExpiresIn: "1d", // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s
};
