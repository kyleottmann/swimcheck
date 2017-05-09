'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SelectathleteCtrl
 * @description
 * # SelectathleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SelectathleteCtrl', function ($scope, $location,$http, userService) {
    $scope.redirect = function() {
    	userService.athleteNo = (document.getElementById('btn1').value);
    	$http.post('/app/athletesession?athleteNo=' + (document.getElementById('btn1').value));
    	$location.path('/checkin');
    };
  });