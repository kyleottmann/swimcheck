'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SuccessCtrl
 * @description
 * # SuccessCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SuccessCtrl', function ($scope, $http, $location, userService) {
	  $http.get('app/athlete?athleteNo=' + userService.athleteNo)
	  .then(function(response) {
	  		$scope.athstatus = response.status;
	  		$scope.athlete = response.data;
	  	}, function(response) {
	  		$scope.athlete = response.data || 'Request failed';
	  		$scope.athstatus = response.status;
	  	});

	  $http.get('app/checkedin?athleteNo=' + userService.athleteNo)
	  .then(function(response) {
	  		$scope.checkedinstatus = response.status;
	  		$scope.checkedin = response.data;
	  	}, function(response) {
	  		$scope.checkedin = response.data || 'Request failed';
	  		$scope.checkedinstatus = response.status;
	  	});
	  
	    $scope.redirect = function() {
	    	userService.athleteNo = null;
	    	$location.path('/');
	    };
  });
