'use strict';

describe('Controller: PtCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var PtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PtCtrl = $controller('PtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PtCtrl.awesomeThings.length).toBe(3);
  });
});
