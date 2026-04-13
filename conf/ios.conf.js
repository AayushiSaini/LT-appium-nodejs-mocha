exports.capabilities = {
  'build': 'Mocha-iOS-Sample',
  'name': 'Mocha-iOS',
  'platformName': 'ios',
  'deviceName': 'iPhone 15',
  'platformVersion': '17',
  'app': 'lt://proverbial-ios',
  'isRealMobile': true,
  'visual': false,
  'network': false,
  'console': false,
  'tunnel': false
};

exports.LT_USERNAME = process.env.LT_USERNAME || "<your_username>";
exports.LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "<your_access_key>";