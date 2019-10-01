'use strict';

describe('Controller: ChtCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var ChtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChtCtrl = $controller('ChtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChtCtrl.awesomeThings.length).toBe(3);
  });
});
