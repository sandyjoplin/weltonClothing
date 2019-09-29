'use strict';

describe('Controller: GbCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GbCtrl = $controller('GbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GbCtrl.awesomeThings.length).toBe(3);
  });
});
