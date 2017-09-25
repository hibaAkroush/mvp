var app = angular.module('myApp', []);

app.controller("AppCtrl", function($scope,$http) {

$http.get('/people').then(function(response){
	console.log("i got data",response)
	$scope.people = response.data
})
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
});


app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);


