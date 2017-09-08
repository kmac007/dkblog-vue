// 获取标签

const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/api/tags', (req, res) => {
  // tags去重
  db.Article.find({ isPublish: true }).distinct('tags', (err, doc) => {
    if (err) {
      console.log(err)
    } else if (doc) {
      res.send(doc)
    }
  })
})

module.exports = router
