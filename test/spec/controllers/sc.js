'use strict';

describe('Controller: ScCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var ScCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScCtrl = $controller('ScCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScCtrl.awesomeThings.length).toBe(3);
  });
});
