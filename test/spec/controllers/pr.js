'use strict';

describe('Controller: PrCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var PrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrCtrl = $controller('PrCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrCtrl.awesomeThings.length).toBe(3);
  });
});
