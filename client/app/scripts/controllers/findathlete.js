'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FindathleteCtrl
 * @description
 * # FindathleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FindathleteCtrl', function ($scope, $http, $log, alertService, $location, jsonDataService) {
	  $scope.findathlete = function() {
		  $http.get('app/findathlete', {params: {lastname: $scope.lastname, birthdate: document.getElementById("birthdate").value}})
		  	.then(function(response) {
		  		$scope.status = response.status;
		  		$scope.data = response.data;
		  		if (response.data.hasOwnProperty("isSuccessfull")) {
		  			jsonDataService.set(response.data);
		  			$location.path('/selectathlete');
		  		}
		  	}, function(response) {
		  		$scope.data = response.data || 'Request failed';
		  		$scope.status = response.status;
		  	});	
	  };
  });


