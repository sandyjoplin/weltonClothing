'use strict';

describe('Controller: GtCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GtCtrl = $controller('GtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GtCtrl.awesomeThings.length).toBe(3);
  });
});
