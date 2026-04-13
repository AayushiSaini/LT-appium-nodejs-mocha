const { Builder } = require("selenium-webdriver");
const conf = require("../conf/parallel_ios.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || "your_lambdatest_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_lambdatest_access_key";

describe("LambdaTest iOS Parallel Test", function () {
  this.timeout(300000);

  conf.capabilities.forEach(function (caps) {
    it("Running test on " + caps['appium:deviceName'], async function () {
      let driver = await new Builder()
        .usingServer("https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@mobile-hub.lambdatest.com/wd/hub")
        .withCapabilities({
          ...caps,
          'lt:options': {
            ...caps['lt:options'],
            user: LT_USERNAME,
            accessKey: LT_ACCESS_KEY
          }
        })
        .build();

      try {
        await driver.get("https://google.com");
        console.log("Success: " + caps['appium:deviceName']);
      } finally {
        if (driver) await driver.quit();
      }
    });
  });
});