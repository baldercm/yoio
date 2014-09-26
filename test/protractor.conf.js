exports.config = {
  baseUrl: 'http://localhost:9001/',

  framework: 'jasmine',
  specs: [
    'e2e/**/*.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  allScriptsTimeout: 11000,

  capabilities: {
    'browserName': 'chrome'
  }
};
