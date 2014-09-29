'use strict';

describe('yoioRestApi', function () {

  var httpProvider;

  beforeEach(module('yoioRestApi', function ($httpProvider) {
    httpProvider = $httpProvider;
  }));
  beforeEach(module('yoioJasmineExt'));
  beforeEach(inject(function(CustomMatchers) {
    this.addMatchers(CustomMatchers);
  }));

  describe('custom config', function () {
    it('should create yoioRestApiHttpInterceptor', inject(function (yoioRestApiHttpInterceptor) {
      expect(yoioRestApiHttpInterceptor.request).toBeDefined();
    }));

    it('created yoioRestApiHttpInterceptor must transform REST API URLs', inject(function (yoioRestApiHttpInterceptor) {
      var restUri = yoioRestApiHttpInterceptor.request({url: 'api/something'});
      expect(restUri).toDeepEqual({url: 'http://127.0.0.1:9000/api/something'});
    }));
    it('created yoioRestApiHttpInterceptor must not transform non REST URLs', inject(function (yoioRestApiHttpInterceptor) {
      var restUri = yoioRestApiHttpInterceptor.request({url: 'views/something'});
      expect(restUri).toDeepEqual({url: 'views/something'});
    }));

    it('should have added yoioRestApiHttpInterceptor', inject(function () {
      expect(httpProvider.interceptors).toContain('yoioRestApiHttpInterceptor');
    }));
  });

});
