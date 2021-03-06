'use strict';

describe('Controller: GuestCtrl', function () {

  // load the controller's module
  beforeEach(module('mysteryMakerApp'));

  var GuestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuestCtrl = $controller('GuestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
