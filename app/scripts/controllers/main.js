'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
