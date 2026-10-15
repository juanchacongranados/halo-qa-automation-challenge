# QA Automation Challenge — Halo Media

Automated end-to-end testing project developed with **Playwright and TypeScript** as part of the Halo Media Senior QA Automation Engineer technical assessment.

## 1. Project Overview

This project automates key user workflows on [SauceDemo](https://www.saucedemo.com/), a sample e-commerce application designed for testing.

The solution focuses on validating critical user journeys, covering both positive and negative scenarios while keeping the automation framework maintainable, reusable, and easy to execute.

## 2. Technology Stack

- **Automation Framework:** Playwright Test
- **Programming Language:** TypeScript
- **Design Pattern:** Page Object Model (POM)
- **Browsers:** Chromium, Firefox, WebKit
- **CI/CD:** GitHub Actions
- **Reporting:** Playwright HTML Reporter
- **Version Control:** Git / GitHub
- **Runtime:** Node.js 22

### Why Playwright?

Although WebdriverIO with Cucumber was suggested in the exercise, Playwright was selected because it provides an integrated testing solution with:

- Built-in auto-waiting and reliable assertions.
- Native TypeScript support.
- Cross-browser testing capabilities.
- Parallel test execution.
- Built-in HTML reports and debugging tools.
- Straightforward integration with GitHub Actions.

For this particular challenge, Playwright Test provides a lightweight solution without requiring additional BDD tooling.

## 3. Automated Test Scenarios

### Scenario 1 — Successful Login

**Objective:** Verify that a user can successfully authenticate using valid credentials.

**Expected Result:** The user is redirected to the inventory page.

**Reason for selection:** Authentication is a critical entry point to the application and a prerequisite for other user workflows.

### Scenario 2 — Invalid Login

**Objective:** Verify that the application rejects invalid credentials.

**Expected Result:** An appropriate authentication error message is displayed.

**Reason for selection:** Negative authentication testing helps validate error handling and access control behavior.

### Scenario 3 — Successful Purchase

**Objective:** Validate the complete e-commerce purchase workflow.

**Test flow:**

1. Log in using valid credentials.
2. Navigate to the inventory page.
3. Add a product to the shopping cart.
4. Verify the cart item count.
5. Open the shopping cart.
6. Verify that the selected product is present.
7. Proceed to checkout.
8. Enter customer information.
9. Verify the checkout overview page and confirm that the selected product appears in the order summary.
10. Complete the purchase.
11. Verify the order confirmation message.

**Reason for selection:** The checkout process represents a critical business workflow that involves multiple application components. Automating this journey provides broader functional coverage than testing an isolated UI element.

## 4. Framework Architecture

The project follows the **Page Object Model (POM)** design pattern to separate page interactions from test scenarios.

```text
halo-qa-automation-challenge/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── login.spec.ts
│   └── checkout.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

### Architecture Decisions

**Page Object Model**

Each page class encapsulates the locators and interactions associated with a specific application page. This reduces duplication and makes tests easier to maintain when UI elements change.

**Test Data Separation**

Reusable test data is maintained separately from test scenarios, improving readability and reducing hardcoded values.

**Independent Test Execution**

Playwright provides isolated browser contexts, allowing tests to run independently across supported browsers.

**Cross-Browser Coverage**

The same scenarios execute against Chromium, Firefox, and WebKit to validate behavior across different browser engines.

## 5. Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js 22
- npm
- Git

## 6. Installation

Clone the repository:

```bash
git clone https://github.com/juanchacongranados/halo-qa-automation-challenge.git
```

Navigate to the project directory:

```bash
cd halo-qa-automation-challenge
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

## 7. Running Tests

### Run all tests

```bash
npm test
```

### Run tests in Chromium

```bash
npx playwright test --project=chromium
```

### Run tests in headed mode

```bash
npx playwright test --project=chromium --headed
```

### Run login tests

```bash
npx playwright test tests/login.spec.ts
```

### Run checkout tests

```bash
npx playwright test tests/checkout.spec.ts
```

### Run tests sequentially

```bash
npx playwright test --workers=1
```

### Check TypeScript

```bash
npm run typecheck
```

### Repeat tests to check stability

```bash
npx playwright test --repeat-each=3
```

## 8. Test Reports

Playwright automatically generates an HTML report after test execution.

To open the report:

```bash
npx playwright show-report
```

The report provides test results, execution times, and failure details.

## 9. Continuous Integration

The project includes a GitHub Actions workflow located at:

`.github/workflows/playwright.yml`

The workflow is configured to:

1. Check out the repository.
2. Set up Node.js.
3. Install project dependencies.
4. Run TypeScript validation.
5. Install Playwright browsers.
6. Execute automated tests.
7. Upload the Playwright HTML report as a workflow artifact.

This allows automated validation when changes are pushed to the repository or submitted through pull requests, according to the workflow triggers.

## 10. Test Execution Results

During local development, the following executions were completed successfully:

| Validation                        | Result                    |
| --------------------------------- | ------------------------- |
| Complete test suite               | 9 passed                  |
| Repeated execution (3 iterations) | 27 passed                 |
| TypeScript validation             | Passed                    |
| Browser coverage                  | Chromium, Firefox, WebKit |

All automated tests and TypeScript checks also passed successfully in GitHub Actions. Two consecutive CI workflow runs completed successfully, including the latest execution after adding checkout overview validation.

## 11. Potential Improvements

For a larger production automation project, possible improvements include:

- Additional negative checkout scenarios.
- API-level testing to complement UI coverage.
- Environment-specific configuration.
- Expanded test data management.
- Additional reporting and CI integrations.

The current implementation intentionally prioritizes the critical workflows and maintainability required for this exercise.

## 12. Author

Juan Alexander Chacón Granados

Senior QA Engineer

Developed as part of the Halo Media QA Automation technical assessment.
