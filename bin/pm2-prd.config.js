/*
 * @Author: 一尾流莺
 * @Description:pm2 配置文件，线上环境
 * @Date: 2022-06-19 17:08:52
 * @LastEditTime: 2022-06-19 17:09:01
 * @FilePath: \biz-editer-server\bin\pm2-prd.config.js
 */
const appConf = require('./pm2AppConf')

module.exports = {
  apps: [appConf],
}