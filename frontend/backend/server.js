const express  = require('express')
const mongoose = require('mongoose')
const cors     = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://portfolio-project-r41w08gqx-nakka-harshini-devi-s-projects.vercel.app',
  ]
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err))

app.use('/api/contact', require('./routes/contact'))

app.get('/', (req, res) => {
  res.json({ message: 'Harshini Portfolio API running ✅' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})