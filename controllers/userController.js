// controllers/userController.js
const User = require('../models/userSchema');

exports.getAllUsers = async (req, res) => {
  console.log('dddd')
  try {
    // const users = await User.find();
    // res.json(users);
    console.log("this is getAllUser Router")
    res.send('This is the getAllUsers URL')
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create a new user
    const newUser = new User({ name, email });

    // Save the user to the database
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};