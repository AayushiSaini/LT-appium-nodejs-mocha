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
      'visual': true,
      'network': true
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
      'name': 'Test-iPhone-14',
      'visual': true,
      'network': true
    }
  }
];
