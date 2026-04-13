exports.capabilities = {
    'browserName': 'Chrome',
    'platformName': 'android',
    'appium:deviceName': 'Galaxy S10',
    'appium:platformVersion': '11',
    'appium:app': 'lt://proverbial-android', 
    'appium:isRealMobile': true,
    'lt:options': {
        'build': 'Mocha-Appium-Sample',
        'name': 'Mocha-Android-Single',
        'visual': true,
        'network': true,
        'console': true
    }
};

exports.LT_USERNAME = process.env.LT_USERNAME || "your_username";
exports.LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";