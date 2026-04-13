const { Builder, By } = require("selenium-webdriver");

const LT_USERNAME = process.env.LT_USERNAME || "your_lambdatest_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_lambdatest_access_key";

const capabilities = {
    'browserName': 'Chrome',
    'platformName': 'android',
    'appium:deviceName': 'Galaxy S10',
    'appium:platformVersion': '11',
    'appium:app': 'lt://proverbial-android', 
    'appium:isRealMobile': true,
    'lt:options': {
        'build': 'Mocha-Appium-Final',
        'name': 'Android-Test',
        'visual': true,
        'network': false,
        'console': true
    }
};

describe("LambdaTest Test", function () {
    let driver;
    this.timeout(120000);

    before(async function () {
        driver = await new Builder()
            .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
            .withCapabilities(capabilities)
            .forBrowser('chrome') 
            .build();
    });

    it('Launch App and Click Color', async function () {
        await driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click();
        console.log("Success: Clicked Color");
    });

    after(async function () {
        if (driver) await driver.quit();
    });
});