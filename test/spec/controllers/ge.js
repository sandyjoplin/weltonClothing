'use strict';

describe('Controller: GeCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeCtrl = $controller('GeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeCtrl.awesomeThings.length).toBe(3);
  });
});
