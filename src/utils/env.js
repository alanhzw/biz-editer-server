/*
 * @Author: 一尾流莺
 * @Description:环境变量
 * @Date: 2022-06-18 14:43:06
 * @LastEditTime: 2022-06-18 14:45:32
 * @FilePath: \biz-editer-server\src\utils\env.js
 */

const ENV = process.env.NODE_ENV || ''
module.exports = {
  ENV,
  isPrd: ENV === 'production',
  isPrdDev: ENV === 'prd_env',
  idDev: ENV === 'dev',
  isTest: ENV.indexOf('test') === 0,
  isTestLocal: ENV === 'test_local',
  isTestRemote: ENV === 'test_remote'
}