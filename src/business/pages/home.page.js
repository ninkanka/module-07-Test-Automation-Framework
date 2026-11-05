import { BasePage } from '../../core/base.page.js';

export class HomePage extends BasePage {
    async open() {
        await super.open('/');
    }
}