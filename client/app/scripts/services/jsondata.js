'use strict';

/**
 * @ngdoc service
 * @name clientApp.jsonData
 * @description
 * # jsonData
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('jsonDataService', function () {
	  var savedJsonData = {};
	  function set(data) {
		  savedJsonData = data;
	  }
	  function get() {
		  return savedJsonData;
	  }
	  
	  return {
		  set: set, 
		  get: get
	  };
  });
