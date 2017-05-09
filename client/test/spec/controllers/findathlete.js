'use strict';

describe('Controller: FindathleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var FindathleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FindathleteCtrl = $controller('FindathleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FindathleteCtrl.awesomeThings.length).toBe(3);
  });
});
