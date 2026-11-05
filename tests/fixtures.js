import { test as base, expect } from '@playwright/test';
import { HomePage } from '../src/business/pages/home.page.js';
import { LoginPage } from '../src/business/pages/login.page.js';
import { ContactPage } from '../src/business/pages/contact.page.js';
import { RegisterPage } from '../src/business/pages/register.page.js';
import { HeaderComponent } from '../src/business/components/header.component.js';

export const test = base.extend({
    homePage: async ({ page }, use) => use(new HomePage(page)),
    loginPage: async ({ page }, use) => use(new LoginPage(page)),
    contactPage: async ({ page }, use) => use(new ContactPage(page)),
    registerPage: async ({ page }, use) => use(new RegisterPage(page)),
    header: async ({ page }, use) => use(new HeaderComponent(page)),
});
export { expect };