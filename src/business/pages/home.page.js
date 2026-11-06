import { BasePage } from './base.page.js';

export class HomePage extends BasePage {
    async open() {
        await super.open('/');
    }
}