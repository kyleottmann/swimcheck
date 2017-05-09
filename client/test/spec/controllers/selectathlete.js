'use strict';

describe('Controller: SelectathleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SelectathleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelectathleteCtrl = $controller('SelectathleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SelectathleteCtrl.awesomeThings.length).toBe(3);
  });
});
