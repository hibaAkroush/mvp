var app = angular.module('myApp', []);

app.controller("AppCtrl", function($scope,$http) {

$http.get('/people').then(function(response){
	console.log("show me what you got!")
	$scope.people = response.data
})

$scope.add = function(){
	var object = {
	"name" : $scope.input.name,
	"contact" : $scope.input.contact,
	"phone" : $scope.input.phone,
	"condition" : $scope.input.condition
	}


	console.log(object)
	//$http.post("/people",name)
}
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

	   //  person1 = {
    // 	name: "hiba",
    // 	contact: "baba",
    // 	phone: "0548674641",
    // 	condition: "none"
    // }
    //     person2 = {
    // 	name: "sameera",
    // 	contact: "mama",
    // 	phone: "1514541",
    // 	condition: "none"
    // }
    //     person3 = {
    // 	name: "soso",
    // 	contact: "babamama",
    // 	phone:  "56481585858",
    // 	condition: " nn"
    // }
    // var people = [person1,person2,person3]	
    // $scope.people = people
