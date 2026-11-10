# [Module 07] Test Automation Framework
Automated tests for https://practicesoftwaretesting.com/ based on the Gherkin scenarios.
## Run and report
1. `npm istall`
2. `npm test` (headless mode)
3. `npm run test:headed` (Headed mode)
4. HTML report: `npx playwright show-report`
5. list reporter (Playwright has its own spec reporter called list and it shows the results of each test in the terminal)
## Notes:
* The features files are documentation only; they are not executed.
* If login failed: Account locked, too many failed attempts. In this case please use the another demo account (change data in `VALID_USER` in the test-data.js):
 ---** Email: `customer@practicesoftwaretesting.com` OR ---** Email: `customer3@practicesoftwaretesting.com`
 ---** Password: `welcome01`                         OR ---** Password `pass123`
 ## Structure
* `src/core/` — playwright.config.js
* `src/business/` — base classes (independent of the site), pages, header component, test data
* `tests/` — tests and data for tests. Features files with test scenarious