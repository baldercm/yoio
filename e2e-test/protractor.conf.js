exports.config = {
  baseUrl: 'http://localhost:9001/',

  framework: 'cucumber',
  specs: [
    'cucumber/*.feature'
  ],
  cucumberOpts: {
    require: 'cucumber/stepDefinitions.js',
    tags: '@dev',
    format: 'summary'
  },

  // framework: 'jasmine',
  // specs: [
  //   'spec/**/*.js'
  // ],
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 30000
  // },

  allScriptsTimeout: 11000,

  capabilities: {
    'browserName': 'chrome'
  }
};
