'use strict';

describe('Controller: CaCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaCtrl = $controller('CaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaCtrl.awesomeThings.length).toBe(3);
  });
});
