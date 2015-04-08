'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    $scope = $rootScope;
    if(typeof $rootScope.task === 'undefined'){
        $rootScope.task = 1;
    };
    $rootScope.changeTask = function(i) {
        $rootScope.task = i;
        $location.path('/');
    };
    if ($rootScope.task == 1) {
        $location.path('/login');
    } else {
        $location.path('/timeline');
    }
  });
