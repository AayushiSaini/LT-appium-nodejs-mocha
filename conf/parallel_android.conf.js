const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

var config = {
  commonCapabilities: {
    'lt:options': {
      'build': "Mocha-Android-Parallel-Sample",
      'name': 'Mocha-Android parallel',
      'tunnel': false,
      'isRealMobile': true,
      'visual': false,
      'network': false,
      'console': false,
    },
    'appium:app': 'lt://proverbial-android', // App URL
  },
  multiCapabilities: [
    {
      'platformName': 'android',
      'appium:deviceName': 'Galaxy S10',
      'appium:platformVersion': '11',
    },
    {
      'platformName': 'android',
      'appium:deviceName': 'Galaxy S10+',
      'appium:platformVersion': '11',
    }
  ]
};

exports.capabilities = [];

// Merging common and specific capabilities
config.multiCapabilities.forEach(function(caps) {
  let temp_caps = JSON.parse(JSON.stringify(config.commonCapabilities));
  
  // Platform name directly root pe rehta hai
  temp_caps['platformName'] = caps['platformName'];
  
  // Specific device info caps mein merge karna
  temp_caps['appium:deviceName'] = caps['appium:deviceName'];
  temp_caps['appium:platformVersion'] = caps['appium:platformVersion'];
  
  // Browser name empty string for Native App
  temp_caps['browserName'] = 'Chrome'; 

  exports.capabilities.push(temp_caps);
});

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
