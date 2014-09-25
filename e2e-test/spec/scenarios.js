'use strict';

describe('yoio', function() {

  browser.get('index.html');

  it('should automatically redirect to /grades/list when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/grades/list");
  });

});
