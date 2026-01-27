const { Builder, By, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_android.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

// Capabilities array se uthayenge
const capabilities = conf.capabilities;

describe("LambdaTest Android Parallel Test", function () {
    this.timeout(300000);

    capabilities.forEach(function (caps) {
        it("Testing on " + caps['appium:deviceName'], async function () {
            
            // App Automation ke liye mobile-hub aur forBrowser ko empty rakhna hai
            let driver = await new Builder()
                .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
                .withCapabilities(caps)
                .build(); // forBrowser('chrome') HATA DIYA HAI

            try {
                console.log("App Launched Successfully on: " + caps['appium:deviceName']);

                // Proverbial App Interactions
                let colorBtn = await driver.wait(until.elementLocated(By.id('com.lambdatest.proverbial:id/color')), 20000);
                await colorBtn.click();
                console.log("Successfully clicked Color");

                let textBtn = await driver.wait(until.elementLocated(By.id('com.lambdatest.proverbial:id/Text')), 10000);
                await textBtn.click();
                console.log("Successfully clicked Text");

            } catch (e) {
                console.error("Test failed on " + caps['appium:deviceName'] + ": " + e.message);
                throw e;
            } finally {
                if (driver) await driver.quit();
            }
        });
    });
});
