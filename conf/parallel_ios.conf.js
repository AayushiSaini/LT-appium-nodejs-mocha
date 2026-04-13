const LT_USERNAME = process.env.LT_USERNAME || "your_lambdatest_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_lambdatest_access_key";

exports.capabilities = [
  {
    'browserName': 'safari',
    'platformName': 'ios',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17',
    'lt:options': {
      'isRealMobile': true,
      'build': 'Mocha-iOS-Parallel-Final',
      'name': 'Test-iPhone-15',
      'app': 'lt://proverbial-ios',
    }
  },
  {
    'browserName': 'safari',
    'platformName': 'ios',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '18',
    'lt:options': {
      'isRealMobile': true,
      'build': 'Mocha-iOS-Parallel-Final',
      'name': 'Test-iPhone-14'
    }
  }
];

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;