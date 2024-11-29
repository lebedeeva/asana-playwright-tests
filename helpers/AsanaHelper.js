class AsanaHelper {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    console.log(`Navigating to: ${url}`);
    await this.page.goto(url);
  }

  async fillInput(selector, value) {
    console.log(`Filling input: ${selector} with value: ${value}`);
    await this.page.fill(selector, value);
  }

  async click(selector) {
    console.log(`Clicking on: ${selector}`);
    await this.page.click(selector);
  }

  async waitForSelector(selector) {
    console.log(`Waiting for selector: ${selector}`);
    await this.page.waitForSelector(selector);
  }

  async isVisible(selector) {
    console.log(`Checking visibility of: ${selector}`);
    return await this.page.locator(selector).isVisible();
  }

  async isTaskInColumn(task, column) {
    console.log(`Checking task: ${task} in column: ${column}`);
    const taskSelector = `//div[contains(text(), "${task}") and ancestor::div[contains(@class, "column") and contains(., "${column}")]]`;
    return await this.page.locator(taskSelector).isVisible();
  }

  async isTagVisible(tag) {
    console.log(`Checking for tag: ${tag}`);
    const tagSelector = `//span[contains(text(), "${tag}")]`;  // XPath selector for tags
    return await this.page.locator(tagSelector).isVisible();
  }
}

module.exports = AsanaHelper;
