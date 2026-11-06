import { BasePage } from './base.page.js';

export class ContactPage extends BasePage {
    async fillForm({ firstName, lastName, email, subject, message }) {
        await this.fillField({
            'first-name': firstName,
            'last-name': lastName,
            email,
        });
        await this.byTestId('subject').selectOption(subject);
        await this.byTestId('message').fill(message);
    }
    async send() {
        await this.byTestId('contact-submit').click();
    }
    confirmationMessage() {
        return this.page.getByText('Thanks for your message', { exact: false });
    }
}