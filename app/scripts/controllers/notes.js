'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('NotesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
