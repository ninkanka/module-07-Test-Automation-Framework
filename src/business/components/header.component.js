import { BaseComponent } from '../pages/base.page.js';

export class HeaderComponent extends BaseComponent {
    userMenu() {
        return this.byTestId('nav-menu');
    }

    signInLink() {
        return this.byTestId('nav-sign-in');
    }

    contactLink() {
        return this.byTestId('nav-contact');
    }

    signOutLink() {
        return this.byTestId('nav-sign-out');
    }

    async openContact() {
        await this.contactLink().click();
    }

    async signOut() {
        await this.userMenu().click();
        await this.signOutLink().click();
    }
}
