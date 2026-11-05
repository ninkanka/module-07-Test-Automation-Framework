# [Module 07] Test Automation Framework
Automated tests for https://practicesoftwaretesting.com/ based on the Gherkin scenarios.
## Run and report
1. npm istall
2. npx playwright test OR npm test
3. HTML report: npx playwright show-report
## Notes:
* The features files are documentation only; they are not executed.
* If login failed: Account locked, too many failed attempts. In this case please use the another demo account (change data in `VALID_USER` in the test-data.js):
 ---** Email: `customer2@practicesoftwaretesting.com`
 ---** Password: `welcome01`