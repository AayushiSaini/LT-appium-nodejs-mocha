const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

exports.capabilities = [
    {
        'browserName': '',
        'platformName': 'Android',
        'appium:deviceName': 'Galaxy S21 5G', // Real Device Name
        'appium:platformVersion': '12',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true, // Yeh sabse important hai
        'lt:options': {
            'build': 'Mocha-Android-Real-Device-Build',
            'name': 'Test-on-Real-S21',
            'visual': true,
            'network': false,
            'console': true,
            'isRealMobile': true // Double check ke liye lt:options mein bhi
        }
    },
    {
        'browserName': '',
        'platformName': 'Android',
        'appium:deviceName': 'Pixel 6', // Real Device Name
        'appium:platformVersion': '12',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true,
        'lt:options': {
            'build': 'Mocha-Android-Real-Device-Build',
            'name': 'Test-on-Real-Pixel6',
            'visual': true,
            'network': false,
            'console': true,
            'isRealMobile': true
        }
    }
];

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
