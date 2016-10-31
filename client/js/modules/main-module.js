'use strict';

var mainModule = angular.module('MainModule', ['ui.bootstrap']);
mainModule.controller('LandingCtrl', ['$scope', 'landingService', LandingCtrl]);
mainModule.factory('landingService', ['$resource', LandingService]);
