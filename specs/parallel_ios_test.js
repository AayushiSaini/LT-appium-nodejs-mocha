const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver");

// 🛠️ FIX: Safely find the config file in arguments to avoid picking up "--timeout"
const conf_file = process.argv.find(arg => arg.includes('.conf.js')) || "conf/parallel_ios.conf.js";
const path = require("path");
const config = require(path.resolve(process.cwd(), conf_file));

// Credentials and Capabilities from the loaded config
const LT_USERNAME = config.LT_USERNAME;
const LT_ACCESS_KEY = config.LT_ACCESS_KEY;
const capabilities = config.capabilities;

// Driver builder function
async function buildDriver(caps) {
  return new webdriver.Builder()
    .usingServer(
      `https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
    )
    .withCapabilities(caps)
    .build();
}

// 🔥 PARALLEL EXECUTION: Loop through each device defined in your config
capabilities.forEach((caps) => {
  // Pull device name for the Mocha report title
  const deviceDisplayName = caps['lt:options'].deviceName || "iOS Device";

  describe(`Mocha iOS Parallel Test - ${deviceDisplayName}`, function () {
    let driver;
    this.timeout(0); // Let LambdaTest handle the execution timeout

    it("Application is launched and actions performed", async function () {
      // 🛠️ FIX: Added await to ensure the session starts before moving to next line
      driver = await buildDriver(caps);

      try {
        console.log(`[${deviceDisplayName}] Starting Test...`);

        // 1. Click Color Button
        await driver.findElement(By.xpath('//XCUIElementTypeButton[@name="color"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Color`);

        // 2. Click Notification
        await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Notification"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Notification`);

        // 3. Click Toast
        await driver.findElement(By.xpath('//XCUIElementTypeStaticText[@name="Toast"]')).click();
        console.log(`[${deviceDisplayName}] Successfully clicked Toast`);

        // 4. Wait for and Click GeoLocation
        const geoBtn = await driver.wait(
          until.elementLocated(By.xpath('//XCUIElementTypeStaticText[@name="GeoLocation"]')),
          15000
        );
        await geoBtn.click();
        console.log(`[${deviceDisplayName}] Successfully clicked GeoLocation`);

      } catch (error) {
        console.error(`[${deviceDisplayName}] Test failed:`, error.message);
        throw error;
      } finally {
        // Ensure the session is closed on LambdaTest regardless of pass/fail
        if (driver) {
          await driver.quit();
        }
      }
    });
  });
});