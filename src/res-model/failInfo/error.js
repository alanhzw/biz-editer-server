/*
 * @Author: 一尾流莺
 * @Description:统一错误处理 failInfo
 * @Date: 2022-06-19 14:57:25
 * @LastEditTime: 2022-06-19 14:57:37
 * @FilePath: \biz-editer-server\src\res-model\failInfo\error.js
 */

module.exports = {
  // 统一错误处理
  serverErrorFailInfo: {
    errno: -1,
    message: '运行错误',
  },
  // 404
  notFoundFailInfo: {
    errno: -2,
    message: '404 Not Found',
  },
}