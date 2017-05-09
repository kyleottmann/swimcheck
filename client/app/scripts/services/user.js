'use strict';

/**
 * @ngdoc service
 * @name clientApp.user
 * @description
 * # user
 * Service in the clientApp.
 */
angular.module('clientApp')
  .factory('userService', function () {
    var athleteNo = null;
    
    return {
    	athleteNo : athleteNo
    };
  });
