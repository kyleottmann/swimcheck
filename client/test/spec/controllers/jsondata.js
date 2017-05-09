'use strict';

describe('Controller: JsondataCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var JsondataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsondataCtrl = $controller('JsondataCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JsondataCtrl.awesomeThings.length).toBe(3);
  });
});
