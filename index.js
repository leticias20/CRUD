const express = require('express')
var app = express()
//Route
app.get('/',function(req,res){
  res.send('hello world')
})

var mongoose = require('mongoose');
//MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true})
.then(() => console.log("Database connected!"))
;
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})
//Server
app.listen(8000,function(){
  console.log('Server is Up')
})

const router = require('./routes/emp')
app.use('/emp',router)