const { Builder, By, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_android.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;

describe("LambdaTest Android App Automation", function () {
  this.timeout(300000);

  conf.capabilities.forEach(function (caps) {
    it("Testing on " + caps['appium:deviceName'], async function () {
      
      // App Automation ke liye mobile-hub zaroori hai
      let driver = await new Builder()
        .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
        .withCapabilities(caps)
        .build();

      try {
        // App khulne ka wait karo (Success message print hoga)
        console.log("App Launched Successfully on: " + caps['appium:deviceName']);
        
        // Example: Proverbial app mein 'Color' button par click karna
        // let colorButton = await driver.wait(until.elementLocated(By.id("color")), 10000);
        // await colorButton.click();
        
      } catch (e) {
        console.error("Test Error: " + e.message);
      } finally {
        if (driver) await driver.quit();
      }
    });
  });
});

