const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

var config = {
  commonCapabilities: {
    'lt:options': {
      'build': 'Mocha-iOS-Parallel-Sample',
      'name': 'Mocha-iOS-Parallel',
      'isRealMobile': true,
      'visual': false,
      'network': false,
      'console': false,
      'tunnel': false
    },
    'appium:app': 'lt://proverbial-ios'
  },
  multiCapabilities: [
    {
      'platformName': 'ios',
      'appium:deviceName': 'iPhone 15',
      'appium:platformVersion': '17',
    },
    {
      'platformName': 'ios',
      'appium:deviceName': 'iPhone 14',
      'appium:platformVersion': '18',
    }
  ]
};

exports.capabilities = [];

config.multiCapabilities.forEach(function(caps) {
  let temp_caps = JSON.parse(JSON.stringify(config.commonCapabilities));
  temp_caps['platformName'] = caps['platformName'];
  temp_caps['appium:deviceName'] = caps['appium:deviceName'];
  temp_caps['appium:platformVersion'] = caps['appium:platformVersion'];
  exports.capabilities.push(temp_caps);
});

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
