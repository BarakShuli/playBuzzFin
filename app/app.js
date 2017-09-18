'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.index',
  'myApp.videoPlayer',
  'myApp.videoFeedService',
  'myApp.jsonValidationService'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
