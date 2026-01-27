const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

exports.capabilities = [
    {
        'browserName': '',
        'platformName': 'Android',
        'appium:deviceName': 'Galaxy S21 5G',
        'appium:platformVersion': '12',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true,
        'lt:options': {
            'build': 'Android-Real-Device-Stable',
            'name': 'Stable-Test-S21',
            'visual': true,
            'network': false,
            'console': true
        }
    }
];

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
