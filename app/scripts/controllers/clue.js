'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:ClueCtrl
 * @description
 * # ClueCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('ClueCtrl', function ($scope, $rootScope, $location) {
    $scope.share = function() {
        $rootScope.sharing = true;
        $location.path('/guestlist')
    };
  });
