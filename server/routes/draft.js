const express = require('express')
const router = express.Router()
const checkToken = require('../middlewares/checkToken')
const db = require('../db/db')

// 保存草稿
router.post('/api/draft', checkToken, (req, res) => {
  const article = {
    title: req.body.title,
    content: req.body.content,
    date: Date(),
    tags: req.body.tags,
    isPublish: false
  }
  new db.Article(article).save()
  res.status(200).send('Draft saved successed.')
})

// 更新草稿
router.patch('/api/draft/:aid', checkToken, (req, res) => {
  const aid = req.params.aid
  const article = {
    title: req.body.title,
    content: req.body.content,
    date: Date(),
    tags: req.body.tags,
    isPublish: false
  }
  db.Article.update({ aid: aid }, article, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send('Update success.')
    }
  })
})

// 获取所有草稿
router.get('/api/drafts', checkToken, (req, res) => {
  db.Article.find({ isPublish: false }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router