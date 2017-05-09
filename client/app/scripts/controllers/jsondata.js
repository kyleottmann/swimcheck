'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:JsondataCtrl
 * @description
 * # JsondataCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('JsondataCtrl', function ($scope, jsonDataService) {
	    $scope.athletes = jsonDataService.get();
  });
