'use strict';

function LandingCtrl($scope, landingService) {

   $scope.landing = {
      title: 'Hello, World!',
      version: 'Loading...'
   };

   $scope.landing.fetchVersion = function() {
      landingService.getVersion(
         function(result, headers) {
            $scope.landing.version = result.message;
         },
         function(error) {
            console.error(error);
         }
      );
   };
   $scope.landing.fetchVersion();

}
