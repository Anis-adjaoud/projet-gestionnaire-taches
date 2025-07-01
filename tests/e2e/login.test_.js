const { Builder, By, until } = require('selenium-webdriver');

describe('E2E - Login page', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('should load login page and find input fields', async () => {
    await driver.get('http://localhost:3000/login'); // il faut lancer ici le frontend avant l'execution

    const emailInput = await driver.wait(until.elementLocated(By.name('email')), 5000);
    const passwordInput = await driver.findElement(By.name('password'));

    expect(await emailInput.isDisplayed()).toBe(true);
    expect(await passwordInput.isDisplayed()).toBe(true);
  });
});
