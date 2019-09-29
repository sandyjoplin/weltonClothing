'use strict';

describe('Controller: CarritoCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CarritoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarritoCtrl = $controller('CarritoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarritoCtrl.awesomeThings.length).toBe(3);
  });
});
