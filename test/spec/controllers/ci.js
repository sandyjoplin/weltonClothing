'use strict';

describe('Controller: CiCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CiCtrl = $controller('CiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CiCtrl.awesomeThings.length).toBe(3);
  });
});
