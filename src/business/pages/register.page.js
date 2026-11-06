import { BasePage } from './base.page.js';

export class RegisterPage extends BasePage {
    async register(user) {
        await this.fillField({
            'first-name': user.firstName,
            'last-name': user.lastName,
            dob: user.dateOfBirth,
            street: user.street,
            house_number: user.houseNumber,
            postal_code: user.postalCode,
            city: user.city,
            state: user.state,
            phone: user.phone,
            email: user.email,
            password: user.password,
        });
        await this.byTestId('country').selectOption(user.country);
        await this.byTestId('register-submit').click();
    }
}