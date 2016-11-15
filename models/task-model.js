// load up mongoose and set the promise library to es6
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// define our schema, requireds and defaults are to be handled solely here
// _id is implicit by default on all mongoose schemas
const taskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  status: {type: Boolean, default: true}
})

// Convert our schema into a model and make it public
module.exports = mongoose.model('Task', taskSchema)
