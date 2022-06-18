const router = require('koa-router')()
const packageInfo = require('../../package.json')
const testMysqlConn = require('../db/mysql2')
const ENV = require('../utils/env')
const { WorkModel } = require('../models/WorksModel')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// 测试数据库连接
router.get('/api/db-check', async (ctx) => {
  // 测试 mysql 数据库连接
  const mysqlRes = await testMysqlConn()

  // 测试 mongodb 数据库连接
  let mongodbConn
  try {
    mongodbConn = true
    await WorkModel.findOne()
  } catch (error) {
    mongodbConn = false
  }

  ctx.body = {
    errno: 0,
    data: {
      name: 'biz editor server',
      version: packageInfo.version,
      ENV,
      mysqlConn: mysqlRes.length > 0,
      mongodbConn
    }
  }
})

module.exports = router
