const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

// Yahan humne 2 devices dal diye hain parallel ke liye
exports.capabilities = [
    {
        'browserName': '',
        'platformName': 'android',
        'appium:deviceName': 'Galaxy S10',
        'appium:platformVersion': '11',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true,
        'lt:options': {
            'build': 'Mocha-Android-Parallel-Build',
            'name': 'Test-on-GalaxyS10',
            'visual': true,
            'network': false,
            'console': true
        }
    },
    {
        'browserName': '',
        'platformName': 'android',
        'appium:deviceName': 'Pixel 6',
        'appium:platformVersion': '12',
        'appium:app': 'lt://proverbial-android', 
        'appium:isRealMobile': true,
        'lt:options': {
            'build': 'Mocha-Android-Parallel-Build',
            'name': 'Test-on-Pixel6',
            'visual': true,
            'network': false,
            'console': true
        }
    }
];

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
