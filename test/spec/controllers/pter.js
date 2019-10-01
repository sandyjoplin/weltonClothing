'use strict';

describe('Controller: PterCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var PterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PterCtrl = $controller('PterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PterCtrl.awesomeThings.length).toBe(3);
  });
});
