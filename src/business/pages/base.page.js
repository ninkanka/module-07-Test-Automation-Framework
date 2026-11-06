export class BaseComponent {
  constructor(page) {
    this.page = page;
  }
  byTestId(testId) {
    return this.page.getByTestId(testId);
  }
}

export class BasePage extends BaseComponent {
  async open(path = '/') {
    await this.page.goto(path);
  }
  async fillField(fields) {
    for (const [testId, value] of Object.entries(fields)) {
      await this.byTestId(testId).fill(value);
    }
  }
}