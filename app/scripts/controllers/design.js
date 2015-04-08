'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:DesignCtrl
 * @description
 * # DesignCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('DesignCtrl', function ($scope) {
    $scope.sendEmails = function() {
        alert("Finished Task 1");
        $scope.changeTask(2);
    };
  });
