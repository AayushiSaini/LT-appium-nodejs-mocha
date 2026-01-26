<<<<<<< HEAD
const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

var config = {
  commonCapabilities: {
    'lt:options': {
      'build': 'Mocha-iOS-Parallel-Sample',
      'name': 'Mocha-iOS-Parallel',
      'isRealMobile': true,
      'visual': false,
      'network': false,
      'console': false,
      'tunnel': false
    },
    'appium:app': 'lt://proverbial-ios' // Ensure this matches your LT app upload
  },
  multiCapabilities: [
    {
      'platformName': 'ios',
      'appium:deviceName': 'iPhone .*', // Regex for any iPhone 15
      'appium:platformVersion': '17',    // iOS 18 latest hai but 17 is more stable on cloud
    },
    {
      'platformName': 'ios',
      'appium:deviceName': 'iPhone .*', // Regex for any iPhone 14
      'appium:platformVersion': '18',
    }
  ]
};

exports.capabilities = [];

// Merging logic for Selenium 4 W3C format
config.multiCapabilities.forEach(function(caps) {
  // Deep copy common capabilities
  let temp_caps = JSON.parse(JSON.stringify(config.commonCapabilities));
  
  // Root level capabilities
  temp_caps['platformName'] = caps['platformName'];
  temp_caps['browserName'] = 'Safari'; // Safari is needed for iOS internal routing
  
  // Appium specific capabilities
  temp_caps['appium:deviceName'] = caps['appium:deviceName'];
  temp_caps['appium:platformVersion'] = caps['appium:platformVersion'];

  exports.capabilities.push(temp_caps);
});

exports.LT_USERNAME = LT_USERNAME;
exports.LT_ACCESS_KEY = LT_ACCESS_KEY;
=======
const { Builder, By } = require("selenium-webdriver");

// Credentials fallback
const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

// Config file path logic
const conf_file = process.argv[3] || "conf/parallel_ios.conf.js";
const capabilities = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new Builder()
    .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
    .withCapabilities(caps)
    .forBrowser('safari') // <--- Yeh line error fix karegi
    .build();
};

capabilities.forEach(function(caps) {
  // Device name extract karne ke liye (Safe check)
  const deviceName = caps['appium:deviceName'] || "iOS Device";

  describe("Mocha Parallel iOS: " + deviceName, function() {
    let driver;
    this.timeout(180000);

    it("Application is launched on " + deviceName, async function() {
      driver = await buildDriver(caps);

      try {
        // iOS element interaction (Sample: clicking by ID or accessibility id)
        // Note: iOS mein IDs thode alag ho sakte hain, test ke hisaab se check karein
        await driver.findElement(By.id('Text')).click();
        console.log("Successfully clicked Text on " + deviceName);
      } catch (err) {
        console.log("Error on " + deviceName + ": " + err.message);
        throw err;
      } finally {
        if (driver) {
          await driver.quit();
        }
      }
    });
  });
});
>>>>>>> bd549dd (Saving all changes before pull)
