'use strict';

describe('Controller: CbCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CbCtrl = $controller('CbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CbCtrl.awesomeThings.length).toBe(3);
  });
});
