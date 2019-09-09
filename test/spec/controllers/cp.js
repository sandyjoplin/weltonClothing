'use strict';

describe('Controller: CpCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CpCtrl = $controller('CpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CpCtrl.awesomeThings.length).toBe(3);
  });
});
