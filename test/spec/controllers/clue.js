'use strict';

describe('Controller: ClueCtrl', function () {

  // load the controller's module
  beforeEach(module('mysteryMakerApp'));

  var ClueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClueCtrl = $controller('ClueCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
