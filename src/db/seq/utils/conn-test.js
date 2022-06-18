/*
 * @Author: 一尾流莺
 * @Description:数据库连接测试
 * @Date: 2022-06-18 15:12:36
 * @LastEditTime: 2022-06-18 15:23:09
 * @FilePath: \biz-editer-server\src\db\seq\utils\conn-test.js
 */

const seq = require('../seq')

// 测试连接, 直接运行 node src/db/seq/utils/conn-test.js

seq.authenticate()
  .then(() => {
    console.log('🚀🚀 ~ ok');
  })
  .catch(() => {
    console.log('🚀🚀 ~ fail',);
  })
  .finally(() => {
    console.log('🚀🚀 ~ finally',);
    process.exit()
  })