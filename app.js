const express =  require('express')
const app = express()

app.get('/', (req, res)=>{
 res.send('Welcome to Jobs Application Manager')
})

const PORT = 5000

app.listen(PORT,()=>{
 console.log(`Server is listening on port ${PORT}...`);
})