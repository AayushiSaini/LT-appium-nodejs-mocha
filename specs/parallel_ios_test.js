const { Builder } = require("selenium-webdriver");
const conf = require("../conf/parallel_ios.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;

describe("LambdaTest iOS Parallel Test", function () {
  this.timeout(300000);

  conf.capabilities.forEach(function (caps) {
    it("should run test on " + caps["appium:deviceName"], async function () {
      
      // FIX: Explicitly browser define karo Builder ke andar
      let driver = await new Builder()
        .usingServer("https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@hub.lambdatest.com/wd/hub")
        .forBrowser('safari') // Browser string yahan hardcoded honi chahiye
        .withCapabilities({
          ...caps,
          "lt:options": {
            ...caps["lt:options"],
            project: "Final_Fix_Project",
            user: LT_USERNAME,
            accessKey: LT_ACCESS_KEY
          }
        })
        .build();

      try {
        await driver.get("https://google.com");
        console.log("Success on " + caps["appium:deviceName"]);
      } finally {
        if (driver) await driver.quit();
      }
    });
  });
});
