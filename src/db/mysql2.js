/*
 * @Author: 一尾流莺
 * @Description:mysql2 连接测试
 * @Date: 2022-06-18 14:25:09
 * @LastEditTime: 2022-06-18 16:02:10
 * @FilePath: \biz-editer-server\src\db\mysql2.js
 */

const mysql = require('mysql2/promise')
const { mysqlConfig } = require('../config/envs/dev')

// mysql2 连接测试
async function testMysqlConn() {
  const connection = await mysql.createConnection(mysqlConfig)
  const [rows] = await connection.execute('select now();')
  return rows
}

// 可直接执行 node src/db/mysql2.js 进行测试
// ; (async () => {
//   const rows = await testMysqlConn()
//   console.log('🚀🚀 ~ rows', rows);
// })()

module.exports = testMysqlConn