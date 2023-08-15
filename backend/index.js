const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();
  
const app = express()
const port = 5000


app.use(cors())
app.use(express.json());

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/blogs', require('./routes/blogs'))

app.get('/', (req, res) => {
  res.send('Hello There Baby i am backend of blogsmania!')
})

app.listen(port, () => {
  console.log(`Blogs-mania backend server listening at http://localhost:${port}`)
})