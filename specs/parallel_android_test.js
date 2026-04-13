const { Builder, By, until } = require("selenium-webdriver");
const conf = require("../conf/parallel_android.conf.js");

const LT_USERNAME = process.env.LT_USERNAME || "your_lambdatest_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_lambdatest_access_key";

conf.capabilities.forEach(function (caps) {
    describe(`Android Parallel Test: ${caps['appium:deviceName']}`, function () {
        this.timeout(300000);
        let driver;

        before(async function () {
            driver = await new Builder()
                .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
                .withCapabilities(caps)
                .build();
        });

        it('Should interact with Proverbial App', async function () {
            try {
                let colorBtn = await driver.wait(until.elementLocated(By.id('com.lambdatest.proverbial:id/color')), 30000);
                await colorBtn.click();
                console.log(`Success on ${caps['appium:deviceName']}: Clicked Color`);
            } catch (e) {
                console.error(`Error on ${caps['appium:deviceName']}: `, e.message);
                throw e;
            }
        });

        after(async function () {
            if (driver) await driver.quit();
        });
    });
});