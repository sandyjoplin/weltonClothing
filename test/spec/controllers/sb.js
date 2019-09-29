'use strict';

describe('Controller: SbCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SbCtrl = $controller('SbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SbCtrl.awesomeThings.length).toBe(3);
  });
});
