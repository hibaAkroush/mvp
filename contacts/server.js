
var express = require('express');
var app = express()
var mongojs = require('mongojs')
var db = mongojs('people',['people'])
var bodyParser = require('body-parser')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.get('/people',function (req, res) {
  db.people.find(function(err,data){
  	if(err){
  		console.log("tabban!")
  	}
  	res.json(data) 
  })
});

app.post('/people',function(req,res){
 db.people.insert({name: req.body.name, contact:req.body.contact, phone:req.body.phone, condition:req.body.condition})
})

app.listen(3000)
//!!!!!!dummy data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//     person1 = {
 //    	name: "hiba",
 //    	contact: "baba",
 //    	phone: "0548674641",
 //    	condition: "none"
 //    }
 //        person2 = {
 //    	name: "sameera",
 //    	contact: "mama",
 //    	phone: "1514541",
 //    	condition: "none"
 //    }
 //        person3 = {
 //    	name: "soso",
 //    	contact: "babamama",
 //    	phone:  "56481585858",
 //    	condition: " nn"
 //    }
 //    var people = [person1,person2,person3]	
	// res.json(people)   
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!