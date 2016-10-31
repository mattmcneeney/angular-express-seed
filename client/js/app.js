'use strict';

/* Application declaration */
var app = angular.module('app', [
   'ngRoute',
   'ngResource',
   'ui.bootstrap',
   'MainModule'
]);

/* Application configuration */
app.config(function($routeProvider, $locationProvider) {

   $routeProvider
   .when('/', {
      templateUrl: '../views/landing.html',
      controller: 'LandingCtrl'
   });

   /* HTML5 routing */
   $locationProvider.html5Mode(true);
});
