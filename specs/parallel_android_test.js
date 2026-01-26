const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

// Credentials
const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

// Config file path (same logic as yours)
const conf_file = process.argv[3] || "conf/parallel_android.conf.js";
const capabilities = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new Builder()
    .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
    .withCapabilities(caps)
    .forBrowser('chrome') // Yeh error fix karega
    .build();
};

// Loop through each capability for parallel execution
capabilities.forEach(function(caps) {
  
  describe("Mocha Parallel Test: " + (caps.deviceName || caps['appium:deviceName']), function() {
    let driver;
    this.timeout(180000); // Parallel runs take time to initialize

    it("Application interaction test on " + (caps.deviceName || caps['appium:deviceName']), async function() {
      driver = await buildDriver(caps);

      try {
        await driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click();
        console.log("Successfully clicked Color");

        await driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click();
        console.log("Successfully clicked Text");

        await driver.findElement(By.id('com.lambdatest.proverbial:id/notification')).click();
        console.log("Successfully clicked Notification");

        await driver.findElement(By.id('com.lambdatest.proverbial:id/toast')).click();
        console.log("Successfully clicked Toast");
      } finally {
        await driver.quit();
      }
    });
  });
});
