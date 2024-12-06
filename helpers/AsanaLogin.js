const AsanaHelper = require('./AsanaHelper');

class AsanaLogin {
  constructor(page) {
    this.page = page;
    this.helper = new AsanaHelper(page);  // Use the helper for Playwright interactions
  }

  // Define all selectors at the top
  static selectors = {
    loginUrl: 'https://app.asana.com/-/login',
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    continueButton: '//*[text()="Continue"]',
    loginButton: '//*[text()="Log in"]',
    dashboardSelector: '//div[@class="HomePageContent"]',
    projectSelector: '//span[contains(text(), "{project}")]',
    taskSelector: '//div[@class ="CommentOnlyBoardColumn-header"]//h3[contains(text(), "{column1}") and contains(text(), "{column2}")]/../..//ancestor::span[contains(text(),"{task}")]',
    tagSelector: '//div[@class ="CommentOnlyBoardColumn-header"]//h3[contains(text(), "{column1}") and contains(text(), "{column2}")]/../..//ancestor::span[contains(text(),"{task}")]/../../../..//ancestor::span[text()="{tag}"]'
  };

  // Login method using the defined selectors
  async login(loginData) {
    await this.helper.navigateTo(AsanaLogin.selectors.loginUrl);
    await this.helper.fillInput(AsanaLogin.selectors.emailInput, loginData.email);
    await this.helper.waitForSelector(AsanaLogin.selectors.continueButton);
    await this.helper.click(AsanaLogin.selectors.continueButton);
    await this.helper.fillInput(AsanaLogin.selectors.passwordInput, loginData.password);
    await this.helper.waitForSelector(AsanaLogin.selectors.loginButton);
    await this.helper.click(AsanaLogin.selectors.loginButton);
    await this.helper.waitForSelector(AsanaLogin.selectors.dashboardSelector);
  };

  // Navigate to selected project:
  async navigateTo(project) {
    await this.helper.click(AsanaLogin.selectors.projectSelector.replace("{project}", project));
    await this.helper.waitForSelector(AsanaLogin.selectors.projectSelector.replace("{project}", project));
  };

  // Check if the task is in the correct column
  async isTaskInColumn(task, column1, column2) {
    const taskSelector = AsanaLogin.selectors.taskSelector.replace("{task}", task).replace("{column1}", column1).replace("{column2}", column2);
    await this.helper.waitForSelector(taskSelector);
    return await this.helper.isVisible(taskSelector);
  }

  // Check if a tag is visible on the page
  async isTagVisible(task, column1, column2, tag) {
    const tagSelector = AsanaLogin.selectors.tagSelector.replace("{task}", task).replace("{column1}", column1).replace("{column2}", column2).replace("{tag}", tag);
    await this.helper.waitForSelector(tagSelector);
    return await this.helper.isVisible(tagSelector);
  }
}

module.exports = AsanaLogin;
