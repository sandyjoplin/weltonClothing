'use strict';

describe('Controller: SpCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpCtrl = $controller('SpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpCtrl.awesomeThings.length).toBe(3);
  });
});
