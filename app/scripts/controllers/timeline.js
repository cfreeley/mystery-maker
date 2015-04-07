'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:TimelineCtrl
 * @description
 * # TimelineCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('TimelineCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
