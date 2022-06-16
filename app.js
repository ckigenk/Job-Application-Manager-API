const express = require('express')
const app = express()
const connectDB=require('./db/connect')
require('dotenv').config()
const jobs=require('./routes/jobs')

app.get('/', (req, res) => {
  res.send('Welcome to Jobs Application Manager')
})

app.use(express.json())

app.use('/api/v1/jobs', jobs)

const PORT = 5000

const start = async()=>{
  try {
    await connectDB(process.env['MONGO_URI'])
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
    
  } catch (error) {
    console.log(error);
    
  }
}

start()