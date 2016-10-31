'use strict'

// require dependencies
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// setting up environment variables
const appPort = process.env.appPort || 4000
const dbURI = process.env.dbURI || require('./config/env-variables').dbURI

// setting up mongoose
mongoose.connect(dbURI)

// setting up the homepage
app.use('/', express.static('client/public'))

// setting up bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting up the express router
const taskRouter = require('./routes/task-router')
app.use('/api/tasks', taskRouter)

// setting up the express server
app.listen(appPort, () => console.log('App running on port: ' + appPort))
