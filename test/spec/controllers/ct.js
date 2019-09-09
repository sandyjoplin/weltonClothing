'use strict';

describe('Controller: CtCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtCtrl = $controller('CtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CtCtrl.awesomeThings.length).toBe(3);
  });
});
