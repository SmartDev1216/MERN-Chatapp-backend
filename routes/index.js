const express = require('express')
const userRoutes = require ('./userRoutes')
const transferRoutes = require('./transferRoutes')
const chatRoutes = require('./chatRoutes')
const router = express.Router();

router.use('/users', userRoutes);
router.use('/transfer', transferRoutes)
router.use('/chat',chatRoutes)

module.exports = router