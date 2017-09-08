const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect(
  'mongodb://127.0.0.1/dk-blog',
  { useMongoClient: true },
  err => {
    if (!err) {
      console.log('The database has connected.')
    } else {
      console.log('Database connection error.')
    }
  }
)

const UserSchema = new Schema({
  name: String,
  password: String
})

const ArticleSchema = new Schema({
  aid: { type: Number, index: { unique: true } },
  title: String,
  content: String,
  tags: [String],
  date: Date,
  isPublish: Boolean,
  comment_n: Number
})

const CommentSchema = new Schema({
  name: String,
  email: String,
  content: String,
  articleId: Number,
  date: Date
})

const Models = {
  User: mongoose.model('User', UserSchema),
  Article: mongoose.model('Article', ArticleSchema),
  Comment: mongoose.model('Comment', CommentSchema)
}

module.exports = Models
