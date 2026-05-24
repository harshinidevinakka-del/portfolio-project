const express = require('express')
const router  = express.Router()
const Message = require('../models/Message')

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    const newMessage = new Message({ name, email, subject, message })
    await newMessage.save()
    res.status(201).json({ success: true, message: 'Message received!' })
  } catch (err) {
    res.status(500).json({ error: 'Server error. Try again.' })
  }
})

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: 'Server error.' })
  }
})

module.exports = router