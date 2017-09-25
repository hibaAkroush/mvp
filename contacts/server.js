
var express = require('express');
var app = express()
var mongojs = require('mongojs')
var db = mongojs('people')
app.use(express.static(__dirname + '/public'))


app.get('/',function (req, res) {
  console.log('Hello World!')
});

app.listen(3000)
