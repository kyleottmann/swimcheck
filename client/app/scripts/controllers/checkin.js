'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CheckinCtrl
 * @description
 * # CheckinCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CheckinCtrl', function ($scope, $http, $location, userService) {
	  $http.get('app/athlete?athleteNo=' + userService.athleteNo)
	  .then(function(response) {
	  		$scope.athstatus = response.status;
	  		$scope.athlete = response.data;
	  	}, function(response) {
	  		$scope.athlete = response.data || 'Request failed';
	  		$scope.athstatus = response.status;
	  	});

	  $http.get('app/entries?athleteNo=' + userService.athleteNo)
	  .then(function(response) {
	  		$scope.entrystatus = response.status;
	  		$scope.entries = response.data;
	  	}, function(response) {
	  		$scope.entries = response.data || 'Request failed';
	  		$scope.entrystatus = response.status;
	  	});
	  
	    $scope.redirect = function() {
	    	$http.post('/app/updateentries', $scope.entries);
	    	$location.path('/success');
	    };
  });
