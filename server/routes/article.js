const express = require('express')
const router = express.Router()
const db = require('../db/db')
const checkToken = require('../middlewares/checkToken')

// 发布文章
router.post('/api/article', checkToken, (req, res) => {
  const article = {
    comment_n: 0,
    title: req.body.title,
    content: req.body.content,
    date: Date(),
    tags: req.body.tags,
    isPublish: true
  }
  new db.Article(article).save()
  res.status(200).send('Post article successed.')
})

// 获取某篇文章
router.get('/api/article/:aid', (req, res) => {
  db.Article.findOne({ aid: req.params.aid }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(doc)
    }
  })
})

// 删除文章
router.delete('/api/article/:aid', checkToken, (req, res) => {
  db.Article.remove({ aid: req.params.aid }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status.send('Successfully deleted.')
    }
  })
})

// 更新文章相应的文章
router.patch('/api/article/:aid', checkToken, (req, res) => {
  const aid = req.params.aid
  const article = {
    title: req.body.title,
    tags: req.body.tags,
    date: Date(),
    content: req.body.content,
    isPublish: true
  }
  db.Article.update({ aid: aid }, article, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send('Successfully updated.')
    }
  })
})

// 获取已发布的文章列表
router.get('/api/article', (req, res) => {
  db.Article.find({ isPublish: true }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

// 搜索文章
module.exports = router