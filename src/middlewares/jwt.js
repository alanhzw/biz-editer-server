const jwtKoa = require("koa-jwt");
const { JWT_SECRET, JWT_IGNORE_PATH } = require("../config/constant");

const jwt = jwtKoa({
  secret: JWT_SECRET, // jwt 秘钥
  cookie: "jwt_token", // 使用 cookie 存储 token
}).unless({
  // 定义哪些路由忽略 jwt 验证
  path: JWT_IGNORE_PATH,
});

module.exports = jwt;
