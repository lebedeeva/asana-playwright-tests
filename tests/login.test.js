// Import Playwright Test functions and other necessary modules
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');  // Use path module to resolve file paths
const dotenv = require('dotenv'); // Import dotenv to load .env file

// Load environment variables from .env file
dotenv.config();

// Import the AsanaLogin helper (ensure the path is correct)
const AsanaLogin = require('../helpers/AsanaLogin');

// Absolute path to the test-cases.json file
const testCasesPath = path.resolve(__dirname, '../data/test-cases.json');

// Read test data from the correct path
let testData;
testData = JSON.parse(fs.readFileSync(testCasesPath));  // Read JSON data

// Ensure email and password are loaded correctly from the .env file
const email = process.env.ASANA_EMAIL;
const password = process.env.ASANA_PASSWORD;

if (!email || !password) {
  console.error('Error: Please define ASANA_EMAIL and ASANA_PASSWORD in your .env file');
  process.exit(1); // Exit the process if email or password is not found
}

test.describe('Asana Task Validation', () => {
  // Loop through each test case in the test data
  testData.forEach((testCase, index) => {
    const uniqueTestTitle = `Validate ${testCase.project} task is in ${testCase.column} and its tags - TC ${index + 1})`; // Make title unique by adding index

    test(uniqueTestTitle, async ({ page }) => {
      const asanaLogin = new AsanaLogin(page);  // Create an instance of AsanaLogin with Playwright page

      // Log in to Asana using email and password from the .env file
      const loginData = {
        email: email,
        password: password
      };
      await asanaLogin.login(loginData);

      // Navigate to the project page
      await asanaLogin.navigateTo(testCase.project);

      // Validate each task in the test case
      const { task, column, tags } = testCase; // Extract task details
      const taskInColumn = await asanaLogin.isTaskInColumn(task, column);
      expect(taskInColumn).toBe(true, `Test Case ${index + 1}: Task "${task}" was not found in the "${column}" column`);

      // Validate tags
      for (const tag of tags) {
        const tagVisible = await asanaLogin.isTagVisible(tag);
        expect(tagVisible).toBe(true, `Test Case ${index + 1}: Tag "${tag}" not found for task "${task}" in project "${testCase.project}"`);
      }
    });
  });
});
