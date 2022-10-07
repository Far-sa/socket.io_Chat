const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref: 'user' },
  message: { type: String },
  dateTime: { type: String }
})

const roomSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String, required: true },
  message: { type: [messageSchema], default: [] }
})

const conversationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  endpoint: { type: String, required: true },
  rooms: { type: [roomSchema], default: [] }
})

module.exports = mongoose.model('Conversation', conversationSchema)
