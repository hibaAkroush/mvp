
var express = require('express');
var app = express()

app.use(express.static(__dirname + '/public'))
app.get('/',function (req,res) {
	console.log("recieved")
})

app.listen(3000)
console.log("server 3000 hiba")
