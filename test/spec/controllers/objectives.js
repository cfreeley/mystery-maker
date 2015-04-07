'use strict';

describe('Controller: ObjectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('mysteryMakerApp'));

  var ObjectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ObjectivesCtrl = $controller('ObjectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
