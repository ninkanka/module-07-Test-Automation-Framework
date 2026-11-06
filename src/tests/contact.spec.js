import { test, expect } from './fixtures.js';
import { CONTACT_FORM } from './test-data.js';

test.describe('Contact form', () => {
    test('Scenario: User should send the contact form', async ({ homePage, header, contactPage }) => {
        await homePage.open();
        await header.openContact();
        await contactPage.fillForm(CONTACT_FORM);
        await contactPage.send();

        await expect(contactPage.confirmationMessage()).toBeVisible();
    });
});