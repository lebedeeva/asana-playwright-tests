// playwright.config.js
module.exports = {
    // Define the directory where your tests are located
    testDir: './tests',  // Path to your test folder
  
    // Define which browser to use for tests (defaults to Chromium)
    // You can also set to use Firefox or WebKit
    use: {
      browserName: 'chromium', // or 'firefox' or 'webkit'
      headless: false, // Set to false if you want to run tests in non-headless mode (useful for debugging)
      screenshot: 'only-on-failure', // Capture screenshot on failure
      video: 'on-first-retry', // Record video of tests (helpful for debugging)
      trace: 'retain-on-failure', // Retain trace files on failure for debugging
    },
  
    // Test timeout setting (optional)
    timeout: 30000, // 30 seconds per test

  };
  