const { Builder } = require("selenium-webdriver");
const conf = require("../conf/parallel_ios.conf.js");

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

describe("LambdaTest iOS Parallel Test", function () {
  this.timeout(300000);

  conf.capabilities.forEach(function (caps) {
    it("Running test on " + caps['appium:deviceName'], async function () {
      
      // Seedha configuration yahan define kar di
      let driver = await new Builder()
        .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub`)
        .forBrowser('safari') // String format mein browser name
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
        let title = await driver.getTitle();
        console.log(`Title for ${caps['appium:deviceName']}: ${title}`);
      } finally {
        if (driver) await driver.quit();
      }
    });
  });
});
