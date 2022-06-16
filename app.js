// import modules
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const jobs = require('./routes/jobs')

app.get('/', (req, res) => {
  res.send('Welcome to Jobs Application Manager')
})

// middleware
app.use(express.json())

// routes
app.use('/api/v1/jobs', jobs)

const PORT = 5000
// connect db then start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
