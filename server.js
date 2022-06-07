const express = require('express')
const PORT = 4000
const app = express()
const cors = require('cors')

require('./db/connection') //to get Mongoose connected you have to require then put the path
// const affirRoutes = require('./routes/affirRoutes')

app.use(cors())

// app.use('/affirmations',affirRoutes)

app.listen(PORT, () =>{
    console.log(`✅ PORT: ${PORT} 🌟`);
})