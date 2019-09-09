'use strict';

describe('Controller: VpCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var VpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VpCtrl = $controller('VpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VpCtrl.awesomeThings.length).toBe(3);
  });
});
