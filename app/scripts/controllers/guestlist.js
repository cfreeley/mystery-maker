'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:GuestlistCtrl
 * @description
 * # GuestlistCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('GuestlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
