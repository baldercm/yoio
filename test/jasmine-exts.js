'use strict';

angular.module('yoioJasmineExt', [])
.factory('CustomMatchers',
  function() {
    return {
      toDeepEqual: function (expected) {
        return angular.equals(this.actual, expected);
      }
    };
  })
.factory('CustomEqualityTesters',
  function() {
    return {};
  });
