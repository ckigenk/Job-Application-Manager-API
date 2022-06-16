const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
 title:{
  type:String,
  required:true
 },
 company:{
  type:String,
  required:true
 },
 deadline:{
  type:String,
  required:false
 },
 link:{
  type:String,
  required:false
 }
})

module.exports = mongoose.model('Jobs', jobsSchema)