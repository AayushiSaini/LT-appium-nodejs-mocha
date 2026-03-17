<<<<<<< HEAD
const webdriver = require("selenium-webdriver");
const { Builder, By } = require("selenium-webdriver");

// LambdaTest Credentials
=======
const { Builder, By } = require("selenium-webdriver");

>>>>>>> bd549dd (Saving all changes before pull)
const LT_USERNAME = process.env.LT_USERNAME || "your_username";
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "your_key";

const capabilities = {
    'browserName': 'Chrome',
    'platformName': 'android',
    'appium:deviceName': 'Galaxy S10',
    'appium:platformVersion': '11',
    'appium:app': 'lt://proverbial-android', 
    'appium:isRealMobile': true,
    'lt:options': {
<<<<<<< HEAD
        'build': 'Mocha-Appium-Update',
        'name': 'Android-Test',
        'visual': true,
        'network': true,
=======
        'build': 'Mocha-Appium-Final',
        'name': 'Android-Test',
        'visual': true,
        'network': false,
>>>>>>> bd549dd (Saving all changes before pull)
        'console': true
    }
};

<<<<<<< HEAD
describe("LambdaTest Android Test", function () {
    let driver;
    this.timeout(120000); // 2 minutes timeout for session creation
=======
describe("LambdaTest Test", function () {
    let driver;
    this.timeout(120000);
>>>>>>> bd549dd (Saving all changes before pull)

    before(async function () {
        driver = await new Builder()
            .usingServer(`https://${LT_USERNAME}:${LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`)
            .withCapabilities(capabilities)
            .forBrowser('chrome') 
            .build();
    });

<<<<<<< HEAD
    it('Should interact with the app', async function () {
        try {
            await driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click();
            console.log("Clicked Color successfully");
            
            await driver.findElement(By.id('com.lambdatest.proverbial:id/Text')).click();
            console.log("Clicked Text successfully");
        } catch (e) {
            console.error("Test failed during interaction:", e.message);
            throw e;
        }
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
=======
    it('Launch App and Click Color', async function () {
        await driver.findElement(By.id('com.lambdatest.proverbial:id/color')).click();
        console.log("Success: Clicked Color");
    });

    after(async function () {
        if (driver) await driver.quit();
>>>>>>> bd549dd (Saving all changes before pull)
    });
});
