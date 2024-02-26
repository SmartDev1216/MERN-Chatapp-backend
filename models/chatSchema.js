const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    username:String,
    message:String,
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const Chat = mongoose.model('ChatMessage',chatSchema)

module.exports = Chat;