'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:GuestCtrl
 * @description
 * # GuestCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('GuestCtrl', function ($scope, $rootScope) {
    console.log($rootScope.sharing);
    if ($rootScope.sharing) {
        $rootScope.sharing = false;
        alert("Finished Task 2");
        $scope.changeTask(3);
    } 
    $scope.accuse = function() {
        alert("Finished Task 3. You're all set! Make sure you give us an A");
        $scope.changeTask(1);
    };
  });
