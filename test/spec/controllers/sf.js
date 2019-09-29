'use strict';

describe('Controller: SfCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SfCtrl = $controller('SfCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SfCtrl.awesomeThings.length).toBe(3);
  });
});
