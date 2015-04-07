'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:GuestCtrl
 * @description
 * # GuestCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('GuestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
