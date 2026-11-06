# [Module 07] Test Automation Framework
Automated tests for https://practicesoftwaretesting.com/ based on the Gherkin scenarios.
## Run and report
1. npm istall
2. npx playwright test OR npm test (headless mode)
3. npm run test:headed (Headed mode)
4. HTML report: npx playwright show-report
5. list reporter (it shows the results of each test in the terminal)
## Notes:
* The features files are documentation only; they are not executed.
* If login failed: Account locked, too many failed attempts. In this case please use the another demo account (change data in `VALID_USER` in the test-data.js):
 ---** Email: `customer2@practicesoftwaretesting.com`
 ---** Password: `welcome01`
 ## Structure
* `src/core/` — playwright.config.js
* `src/business/` — base classes (independent of the site), pages, header component, test data
* `tests/` — tests and data for tests. Features files with test scenarious