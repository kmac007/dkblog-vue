// 验证token中间件
const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
  if (req.headers['authorization']) {
    var token = req.headers['authorization'].split('')[1]
    var decoded = jwt.decode(token, process.env.JWT_SECRET)

    if (token && decoded.exp <= Date.now() / 1000) {
      return res.send({
        code: 401,
        message: '授权已经过期，请重新登录'
      })
    }
  }
  next()
}
