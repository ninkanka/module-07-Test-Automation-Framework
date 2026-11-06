import { test, expect } from './fixtures.js';
import { VALID_USER, buildNewUser } from './test-data.js';

test.describe('Authentication', () => {
  test('Scenario: User signs in with valid information', async ({ loginPage, header }) => {
    await loginPage.open();
    await loginPage.login(VALID_USER);
    await expect(header.userMenu()).toBeVisible();
  });

  test('Scenario: User signs up', async ({ page, loginPage, registerPage }) => {
    await loginPage.open();
    await loginPage.goToRegister();
    await registerPage.register(buildNewUser());
    await page.waitForURL((url) => !url.pathname.includes('/auth/register'));
    await expect(page).not.toHaveURL(/\/auth\/register/);
  });

  test('Scenario: User signs out', async ({ loginPage, header }) => {
    //await loginPage.open();
    await loginPage.loginAs(VALID_USER);
    await expect(header.userMenu()).toBeVisible();
    await header.signOut();
    await expect(header.signInLink()).toBeVisible();
  });
});