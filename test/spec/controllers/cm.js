'use strict';

describe('Controller: CmCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CmCtrl = $controller('CmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CmCtrl.awesomeThings.length).toBe(3);
  });
});
