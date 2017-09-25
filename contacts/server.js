
var express = require('express');
var app = express()
var mongojs = require('mongojs')
var db = mongojs('people',['people'])
app.use(express.static(__dirname + '/public'))


app.get('/people',function (req, res) {
console.log("recived a get ")
	    person1 = {
    	name: "hiba",
    	contact: "baba",
    	phone: "0548674641",
    	condition: "none"
    }
        person2 = {
    	name: "sameera",
    	contact: "mama",
    	phone: "1514541",
    	condition: "none"
    }
        person3 = {
    	name: "soso",
    	contact: "babamama",
    	phone:  "56481585858",
    	condition: " nn"
    }
    var people = [person1,person2,person3]	
	res.json(people)   
  // db.people.find(function(err,data){
  // 	if(err){
  // 		console.log("yl3an hah!")
  // 	}

  // })

});

app.listen(3000)
