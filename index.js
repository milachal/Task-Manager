const express = require('express')
require('./src/db/mongoose')
const User = require('./src/models/user')
const Task = require('./src/models/task')
const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')

const app = express()
const port = process.env.PORT


//parse incoming json
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

