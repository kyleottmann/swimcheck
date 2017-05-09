'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  
  .config(function ($locationProvider, $routeProvider) {
	  $locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/findathlete', {
        templateUrl: 'views/findathlete.html',
        controller: 'FindathleteCtrl'
      })
	  .when('/selectathlete', {
	    templateUrl: 'views/selectathlete.html',
	    controller: 'SelectathleteCtrl'
	  })
	  .when('/checkin', {
	    templateUrl: 'views/checkin.html',
	    controller: 'CheckinCtrl'
	  })
	  .when('/success', {
	    templateUrl: 'views/success.html',
	    controller: 'SuccessCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
