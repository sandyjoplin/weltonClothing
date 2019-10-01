'use strict';

describe('Controller: PpCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var PpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PpCtrl = $controller('PpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PpCtrl.awesomeThings.length).toBe(3);
  });
});
