'use strict';

describe('Controller: GcCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var GcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GcCtrl = $controller('GcCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GcCtrl.awesomeThings.length).toBe(3);
  });
});
