// controllers/chatController.js
const ChatSchema = require('../models/chatSchema');

exports.getChathistory = async (req, res) => {
  console.log('dddd')
  try {
    // const users = await User.find();
    // res.json(users);
    console.log("this is getChathistory Router")
    res.send('This is the getAllUsers URL')
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createChat = async (req, res) => {
  try {
    res.send('Success')
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};