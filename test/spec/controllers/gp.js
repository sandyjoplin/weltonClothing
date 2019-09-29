'use strict';

describe('Controller: GpCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GpCtrl = $controller('GpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GpCtrl.awesomeThings.length).toBe(3);
  });
});
