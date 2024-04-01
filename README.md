# Cypress with BDD
E2E testing of DemoBlaze Website using Cypress with Behaviour Driven Development and Page Object Model (POM) which is an architectural design pattern commonly used in test automation, especially for web applications. The primary goal of the Page Object Model is to enhance test code maintainability, readability, and reusability. Code is written in Typescript and Eslint is used for code linting and ensuring code quality.

# Table of contents

* [Getting Started](#get-started)
* [Setup Locally](#setup-locally)
* [Cypress Configuration](#cypress-configuration)
* [Run the tests](#run-the-tests)
* [Generate testing report](#generate-testing-report)

## Getting Started
Make sure you have configured right your git account and you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (if running tests in Docker)

## Setup Locally
 ```bash
 git clone https://github.com/YlberPllana/DemoBlaze-BDD.git
 ```
 ```bash
 cd your-project
 ```
## Cypress Configuration
* Create a file named cypress.env.json in the root directory of the project. Replace "your_demo_blaze_username" and "your_demo_blaze_password" with your actual credentials for the DemoBlaze website.
 ```bash
{
    "USERNAME": "your_demo_blaze_username",
    "PASSWORD": "your_demo_blaze_password"
}
 ```
* Create a file named randomCredentials.json inside the cypress/fixtures directory. Add the following content to randomCredentials.json:
 ```bash
{
  "generatedEmail": "",
  "generatedPassword": ""
}
 ```
Note: Leave the generatedEmail and generatedPassword fields blank. These values will be automatically generated during test execution.
#### Install project dependencies:
 ```bash
 npm install
 ```
## How to run the tests
#### Running Cypress Test Locally - Headed Mode:
 ```bash
 npm run test:headed
 ```
#### Running Cypress Test Locally - Headless Mode:
 ```bash
 npm run test:headless
 ```
#### Running Cypress Test Locally - Open Cypress Test Runner:
 ```bash
 npm run test:open
 ```

### Running Cypress in Docker:

#### Docker Build Image:
 ```bash
 docker build -t my-cypress-tests .
 ```
 #### Run Docker Container:
 ```bash
 docker run my-cypress-tests
 ```

### Generate Testing report:

HTML Report is generated after you  run `npx cypress run` command, it can be found at root directory with this name: cucumber-report.html

### Find Problems

ESLint statically analyzes the code to find problems.

```bash
npm run lint:eslint
```