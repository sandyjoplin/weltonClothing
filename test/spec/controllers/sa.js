'use strict';

describe('Controller: SaCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaCtrl = $controller('SaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SaCtrl.awesomeThings.length).toBe(3);
  });
});
