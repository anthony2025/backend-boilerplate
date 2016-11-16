const mongoose = require('mongoose')

// _id is implicit by default on all mongoose schemas
const taskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  status: {type: Boolean, default: true}
})

module.exports = mongoose.model('Task', taskSchema)
