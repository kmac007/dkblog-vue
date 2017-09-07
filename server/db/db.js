const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sha1 = require('sha1')
const rand = require('csprng')

const UserSchema = new Schema(
  {
    name: String,
    password: String
  }
)

const ArticleSchema = new Schema(
  {
    aid: { type: Number, index: { unique: true } },
    title: String,
    content: String,
    tags: [String],
    date: Date,
    isPublish: Boolean,
    comment_n: Number
  }
)

const CommentSchema = new Schema(
  {
    name: String,
    email: String,
    content: String,
    articleId: Number,
    date: Date
  }
)

const 