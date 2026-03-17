const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";

exports.capabilities = {
  'browserName': '',     
  'platformName': 'ios',
  'appium:deviceName': 'iPhone 13 Pro Max',
  'appium:platformVersion': '15',
  'appium:app': 'lt://proverbial-ios',
  'appium:isRealMobile': true,

  'lt:options': {
    'user': LT_USERNAME,
    'accessKey': LT_ACCESS_KEY,
    'build': 'Mocha-iOS-Sample',
    'name': 'Mocha-iOS-Test',
    'visual': true,
    'network': true,
    'console': true,
    'w3c': true          
  }
};

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;