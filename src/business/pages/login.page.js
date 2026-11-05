import { BasePage } from '../../core/base.page.js';

export class LoginPage extends BasePage {
    async open() {
        await super.open('/auth/login');
    }
    async login({ email, password }) {
        await this.fillField({ email, password });
        await this.byTestId('login-submit').click();
    }
    async loginAs(user) {
        await this.open();
        await this.login(user);
    }
    async goToRegister() {
        await this.byTestId('register-link').click();
    }
}