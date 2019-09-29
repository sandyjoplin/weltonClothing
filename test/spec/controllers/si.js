'use strict';

describe('Controller: SiCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiCtrl = $controller('SiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SiCtrl.awesomeThings.length).toBe(3);
  });
});
