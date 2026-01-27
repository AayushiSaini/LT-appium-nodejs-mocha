const { Builder, By, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_android.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;

conf.capabilities.forEach(function (caps) {
    describe("Android Real Device Test: " + caps['appium:deviceName'], function () {
        this.timeout(300000);
        let driver;

        before(async function () {
            // Retry logic for session creation
            driver = await new Builder()
                .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
                .withCapabilities(caps)
                .forBrowser('')
                .build();
            
            // Wait for 5 seconds to let network logs initialize
            await new Promise(resolve => setTimeout(resolve, 5000));
        });

        it('Should interact with Proverbial App', async function () {
            try {
                let colorBtn = await driver.wait(until.elementLocated(By.id('com.lambdatest.proverbial:id/color')), 30000);
                await colorBtn.click();
                console.log("Success: Clicked Color on Real Device");
            } catch (e) {
                console.error("Test failed: ", e.message);
                throw e;
            }
        });

        after(async function () {
            if (driver) await driver.quit();
        });
    });
});
