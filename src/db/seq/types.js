/*
 * @Author: 一尾流莺
 * @Description:封装 sequelize 类型，参考 https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/data-types.md
 * @Date: 2022-06-18 15:12:01
 * @LastEditTime: 2022-06-18 15:57:51
 * @FilePath: \biz-editer-server\src\db\seq\types.js
 */
const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING, // VARCHAR(255)
  TEXT: Sequelize.TEXT, // TEXT
  INTEGER: Sequelize.INTEGER,
  BOOLEAN: Sequelize.BOOLEAN,
  DATE: Sequelize.DATE,
}