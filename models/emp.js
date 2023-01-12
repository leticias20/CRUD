const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    empName: String,
     
    empEmail: String, 
    empMobile:  String
     
  });
  module.exports = mongoose.model('Emp', empSchema)