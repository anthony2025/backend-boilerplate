'use strict'

// require dependencies
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// setting up environment variables
require('dotenv').config({silent: true})
const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI || 'mongodb://localhost/tododb'

// setting up mongoose
mongoose.connect(DBURI)

// setting up bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting up the express router
const taskRouter = require('./routes/task-router')
app.use('/api/tasks', taskRouter)

// setting up a homepage
app.get('/', (req, res) => res.send('Try localhost:' + PORT + '/api/tasks'))

// setting up the express server
app.listen(PORT, () => console.log('App running on port: ' + PORT))
