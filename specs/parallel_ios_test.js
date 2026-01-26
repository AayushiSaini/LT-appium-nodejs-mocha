const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const conf = require("../conf/parallel_ios.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;

const gridUrl = "hub.lambdatest.com/wd/hub";

describe("LambdaTest iOS Parallel Test", function () {
  this.timeout(300000);
  let driver;

  conf.capabilities.forEach(function (caps) {
    it("should run test on " + caps["appium:deviceName"], async function () {
      const capabilities = {
        ...caps,
        "lt:options": {
          ...caps["lt:options"],
          user: LT_USERNAME,
          accessKey: LT_ACCESS_KEY,
        },
      };

      driver = await new Builder()
        .usingServer("https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@" + gridUrl)
        .withCapabilities(capabilities)
        .build();

      try {
        // Aapka Test Logic yahan aayega
        await driver.get("https://google.com");
        console.log("Test Passed for " + caps["appium:deviceName"]);
      } finally {
        await driver.quit();
      }
    });
  });
});
