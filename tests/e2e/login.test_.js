const { Builder, By, until } = require('selenium-webdriver');

describe('E2E - Login Page', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 5000 });
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should load login page and display input fields', async () => {
    try {
      await driver.get('http://localhost:3000/login'); 
      const emailInput = await driver.wait(until.elementLocated(By.name('email')), 5000);
      const passwordInput = await driver.findElement(By.name('password'));
      const submitButton = await driver.findElement(By.css('button[type="submit"]'));

      // Vérifications
      expect(await emailInput.isDisplayed()).toBe(true);
      expect(await passwordInput.isDisplayed()).toBe(true);
      expect(await submitButton.isDisplayed()).toBe(true);
    } catch (err) {
      console.error('Test failed:', err);
      throw err; 
    }
  });
});
