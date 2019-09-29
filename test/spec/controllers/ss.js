'use strict';

describe('Controller: SsCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SsCtrl = $controller('SsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SsCtrl.awesomeThings.length).toBe(3);
  });
});
