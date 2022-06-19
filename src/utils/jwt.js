const util = require('util')
const jwt = require('jsonwebtoken')

// jwt 密钥
const { JWT_SECRET } = require('../config/constant')

// jwt 过期时间
const { jwtExpiresIn } = require('../config/index')

const verify = util.promisify(jwt.verify)

/**
 * jwt verify  解密
 * @param {string} token token
 */
async function jwtVerify(token) {
  const data = await verify(token.split(' ')[1], JWT_SECRET) // 去掉前面的 Bearer
  return data
}

/**
 * jwt sign  加密
 * @param {Object} data data
 */
function jwtSign(data) {
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn })
  return token
}

module.exports = {
  jwtVerify,
  jwtSign,
}