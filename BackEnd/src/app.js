const express = require('express')
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json());


app.post('/',(req, res) => {
    res.send('helo world')
})
 
app.use('/ai',aiRoutes)

module.exports = app;