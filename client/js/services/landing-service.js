'use strict';

function LandingService($resource) {

   var defaultTimeout = 10000;

   return $resource('', {},
   {

      getVersion: {
         url: 'api/version',
         method: 'GET',
         responseType: 'json',
         timeout: defaultTimeout
      }

   });

}
