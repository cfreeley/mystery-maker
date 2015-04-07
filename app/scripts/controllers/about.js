'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
