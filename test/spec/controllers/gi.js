'use strict';

describe('Controller: GiCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GiCtrl = $controller('GiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GiCtrl.awesomeThings.length).toBe(3);
  });
});
