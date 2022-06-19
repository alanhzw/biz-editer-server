module.exports = {
  // 密码加密 秘钥
  PASSWORD_SECRET: 'warbler_0174#',

  // jwt 秘钥
  JWT_SECRET: 'warbler_for-json#web$token',

  // jwt 忽略默认验证的 path：全部忽略即可，需要登录验证的，用自己封装的 loginCheck
  JWT_IGNORE_PATH: [/\//],

  // 查询列表，默认分页配置
  DEFAULT_PAGE_SIZE: 8,
}