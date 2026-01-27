const { Builder, By, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_android.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || conf.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || conf.LT_ACCESS_KEY;

// Capabilities array se loop chalayenge parallel execution ke liye
conf.capabilities.forEach(function (caps) {
    
    describe("Android Test on " + caps['appium:deviceName'], function () {
        this.timeout(300000);
        let driver;

        before(async function () {
            driver = await new Builder()
                .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
                .withCapabilities(caps)
                .forBrowser('')
                .build();
        });

        it('Should interact with Proverbial App on ' + caps['appium:deviceName'], async function () {
            try {
                console.log("App Launched Successfully on " + caps['appium:deviceName']);
                let colorBtn = await driver.wait(until.elementLocated(By.id('com.lambdatest.proverbial:id/color')), 30000);
                await colorBtn.click();
                console.log("Success: Clicked Color button on " + caps['appium:deviceName']);
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
