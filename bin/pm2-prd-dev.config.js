/*
 * @Author: 一尾流莺
 * @Description:pm2 配置文件，dev 测试机
 * @Date: 2022-06-19 17:09:38
 * @LastEditTime: 2022-06-19 17:09:45
 * @FilePath: \biz-editer-server\bin\pm2-prd-dev.config.js
 */
const appConf = require('./pm2AppConf')

// 为了测试方便，pm2 进程设置为 1
appConf.instances = 1

module.exports = {
  apps: [appConf],
}