'use strict';

describe('Controller: ChiCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var ChiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChiCtrl = $controller('ChiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChiCtrl.awesomeThings.length).toBe(3);
  });
});
