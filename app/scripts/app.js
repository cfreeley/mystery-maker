'use strict';

/**
 * @ngdoc overview
 * @name mysteryMakerApp
 * @description
 * # mysteryMakerApp
 *
 * Main module of the application.
 */
angular
  .module('mysteryMakerApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/create-party', {
        templateUrl: 'views/create-party.html',
        controller: 'CreatePartyCtrl'
      })
      .when('/timeline', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl'
      })
      .when('/guestlist', {
        templateUrl: 'views/guestlist.html',
        controller: 'GuestlistCtrl'
      })
      .when('/guest', {
        templateUrl: 'views/guest.html',
        controller: 'GuestCtrl'
      })
      .when('/evidence', {
        templateUrl: 'views/evidence.html',
        controller: 'EvidenceCtrl'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/objectives', {
        templateUrl: 'views/objectives.html',
        controller: 'ObjectivesCtrl'
      })
      .when('/clue', {
        templateUrl: 'views/clue.html',
        controller: 'ClueCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
