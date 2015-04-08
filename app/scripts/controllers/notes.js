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
            {text:"Both the goth and mod space pirates are looking to gain more control over the media, through corruption of its key players or by hacking news outlets."},
            {text:"The space pirate message was forged, and its actual sender is Thomas's twin brother. This brother has been presumed dead for years, but definitely was never a space pirate. Is he really dead, or was the message filmed years ago? Also, was the entire message a lie? Or could the allegations be true and only the circumstances of the message false?"},
            {text:"Tony is a veteran of the Great Intergalactic Alien War and has killed many beings, both alien overlords and brainwashed human servants. He definitely would have it in him to kill again."},
            {text:"Tatiana thinks Thomas's son, who works for her non-profit, has been  siphoning funds, using them to book expensive vacations to various planets. But when she attempted to confront him, he will not acknowledge having ever visited the planets. But can Tatiana be trusted to be telling the truth?"}
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
