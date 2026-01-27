const { Builder, By } = require("selenium-webdriver");

const LT_USERNAME = process.env.LT_USERNAME || "aayushis";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "LT_YfpWipMk0LwK9H8x5WCLawCWCmtAehrXGrGZzFXZQFXkM2u";

const capabilities = {
    'browserName': 'Safari', // iOS ke liye Safari ya empty string
    'platformName': 'ios',
    'appium:deviceName': 'iPhone 13',
    'appium:platformVersion': '15',
    'appium:app': 'lt://proverbial-ios', // Ensure aapne iOS app upload kiya ho
    'appium:isRealMobile': true,
    'lt:options': {
        'build': 'Mocha-Appium-iOS-Final',
        'name': 'iOS-Test',
        'visual': false,
        'network': false,
        'console': false
    }
};

describe("LambdaTest iOS Test", function () {
    let driver;
    this.timeout(120000);

    before(async function () {
        driver = await new Builder()
            .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
            .withCapabilities(capabilities)
            .forBrowser('safari') 
            .build();
    });

    it('Launch iOS App and Click Text', async function () {
        // iOS element locators thode alag ho sakte hain, ye sample hai
        await driver.findElement(By.id('Text')).click();
        console.log("Success: Clicked Text on iOS");
    });

    after(async function () {
        if (driver) await driver.quit();
    });
});

