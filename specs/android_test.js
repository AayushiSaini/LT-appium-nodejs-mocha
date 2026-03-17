const webdriver = require("selenium-webdriver");
const { By } = require("selenium-webdriver");

// 1. Direct path to your config file
const config = require("../conf/android.conf.js");

const LT_USERNAME = config.LT_USERNAME;
const LT_ACCESS_KEY = config.LT_ACCESS_KEY;
const caps = config.capabilities;

// 2. Async Driver Builder
async function buildDriver(capabilities) {
  return new webdriver.Builder()
    .usingServer(
      `http://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`
    )
    .withCapabilities(capabilities)
    .build();
}

describe("Mocha Android Test", function () {
  let driver;
  this.timeout(0);

  it("Should launch app and perform actions", async function () {
    // 3. Wait for the session to start
    driver = await buildDriver(caps);

    try {
      console.log("Test Started...");

      // Color Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/color")).click();
      console.log("Successfully clicked Color");

      // Text Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/Text")).click();
      console.log("Successfully clicked Text");

      // Toast Button
      await driver.findElement(By.id("com.lambdatest.proverbial:id/toast")).click();
      console.log("Successfully clicked Toast");

    } catch (err) {
      console.error("Error during test:", err.message);
      throw err;
    } finally {
      // 4. Always quit to save minutes
      if (driver) {
        await driver.quit();
        console.log("Test Finished.");
      }
    }
  });
});