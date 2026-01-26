const { Builder, By, Key, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_ios.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;
const gridUrl = "hub.lambdatest.com/wd/hub";

describe("LambdaTest iOS Parallel Test", function () {
  this.timeout(300000);

  conf.capabilities.forEach(function (caps) {
    it("should run test on " + caps["appium:deviceName"], async function () {
      
      // Capabilities merge kar rahe hain LambdaTest credentials ke sath
      const capabilities = {
        ...caps,
        "lt:options": {
          ...caps["lt:options"],
          user: LT_USERNAME,
          accessKey: LT_ACCESS_KEY,
        },
      };

      // YAHAN HAI FIX: .forBrowser('safari') add kiya hai
      let driver = await new Builder()
        .usingServer("https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@" + gridUrl)
        .forBrowser('safari') 
        .withCapabilities(capabilities)
        .build();

      try {
        // Simple test: Google open karke title check karna
        await driver.get("https://google.com");
        let title = await driver.getTitle();
        console.log("Browser title for " + caps["appium:deviceName"] + " is: " + title);
      } catch (err) {
        console.log("Error on " + caps["appium:deviceName"] + ": " + err.message);
        throw err;
      } finally {
        await driver.quit();
      }
    });
  });
});
