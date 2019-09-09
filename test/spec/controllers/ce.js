'use strict';

describe('Controller: CeCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CeCtrl = $controller('CeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CeCtrl.awesomeThings.length).toBe(3);
  });
});
