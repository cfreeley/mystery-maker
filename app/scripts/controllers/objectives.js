'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:ObjectivesCtrl
 * @description
 * # ObjectivesCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('ObjectivesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
