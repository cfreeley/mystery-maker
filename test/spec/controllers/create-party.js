'use strict';

describe('Controller: CreatePartyCtrl', function () {

  // load the controller's module
  beforeEach(module('mysteryMakerApp'));

  var CreatePartyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatePartyCtrl = $controller('CreatePartyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
