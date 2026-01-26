const { Builder, By } = require("selenium-webdriver");

const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

const conf_file = process.argv[3] || "conf/parallel_ios.conf.js";
const capabilities = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new Builder()
    .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
    .withCapabilities(caps)
    .forBrowser('safari') 
    .build();
};

capabilities.forEach(function(caps) {
  const deviceDisplayName = caps['appium:deviceName'];

  describe("Mocha Parallel iOS: " + deviceDisplayName, function() {
    let driver;
    this.timeout(300000); // 5 Minutes timeout for queue

    it("Test for " + deviceDisplayName, async function() {
      driver = await buildDriver(caps);

      try {
        await driver.findElement(By.id('color')).click();
        console.log(`[${deviceDisplayName}] Success: Clicked Color`);
        
        await driver.findElement(By.id('Text')).click();
        console.log(`[${deviceDisplayName}] Success: Clicked Text`);
      } finally {
        if (driver) await driver.quit();
      }
    });
  });
});
