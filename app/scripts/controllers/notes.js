'use strict';

/**
 * @ngdoc function
 * @name mysteryMakerApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the mysteryMakerApp
 */
angular.module('mysteryMakerApp')
  .controller('NotesCtrl', function ($scope, $rootScope) {
    if(typeof $rootScope.notes === 'undefined'){
        $scope.current = "";
        $rootScope.notes = [
            {text:"Hmm, I wonder if Tatiana has it in her"},
            {text:"buy eggs, cheese, milk"}
        ];
    };
    $scope.addNote = function() {
        console.log($scope);
        $rootScope.notes.splice(0, 0, {text:$scope.current});
        $scope.notes = $rootScope.notes;
        $scope.current = "";
    };
    $scope.deleteNote = function(e) {
        var index = $rootScope.notes.indexOf(e);
        $rootScope.notes.splice(index,1);
        $scope.notes = $rootScope.notes;
    }
  });
