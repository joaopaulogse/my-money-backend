const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('./cors')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(queryParser())

server.use(cors)

server.listen(port, ()=>{
    console.info(`BACKEND is running on port ${port}`)
})
module.exports = server