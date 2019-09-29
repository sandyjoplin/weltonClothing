'use strict';

describe('Controller: SmCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var SmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmCtrl = $controller('SmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SmCtrl.awesomeThings.length).toBe(3);
  });
});
