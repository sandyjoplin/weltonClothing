'use strict';

describe('Controller: StCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var StCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StCtrl = $controller('StCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StCtrl.awesomeThings.length).toBe(3);
  });
});
