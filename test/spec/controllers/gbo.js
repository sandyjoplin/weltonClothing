'use strict';

describe('Controller: GboCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GboCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GboCtrl = $controller('GboCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GboCtrl.awesomeThings.length).toBe(3);
  });
});
