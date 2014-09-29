'use strict';

angular.module('yoioRestApi', [
  'yoioConfig'
])
.factory('yoioRestApiHttpInterceptor', ['ENV',
  function(ENV) {
    return {
      request : function (config) {
        if (/api/.test(config.url)) {
          config.url = ENV.apiEndpoint + config.url;
          return config;
        } else {
          return config;
        }
      }
    };
  }])
.config(['$httpProvider',
  function($httpProvider) {
    $httpProvider.interceptors.push('yoioRestApiHttpInterceptor');
  }
]);
