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
            'build': 'Mocha-Real-Device-Final-Try',
            'name': 'Real-S21-Network',
            'visual': true,
            'network': true, 
            'console': true,
            'devicelog': true,
            'isRealMobile': true
        }
    },
    {
        'browserName': '',
        'platformName': 'Android',
        'appium:deviceName': 'Pixel 6',
        'appium:platformVersion': '12',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true,
        'lt:options': {
            'build': 'Mocha-Real-Device-Final-Try',
            'name': 'Real-Pixel6-Network',
            'visual': true,
            'network': true,
            'console': true,
            'devicelog': true,
            'isRealMobile': true
        }
    }
];

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
