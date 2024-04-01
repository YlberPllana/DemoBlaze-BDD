import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../page-objects/Login";
import NavigationBar from "../../../page-objects/NavigationBar";

const login = new LoginPage();
const navigationBar = new NavigationBar();

Given('the user is on the login page', () => {
  cy.visit('/');
  navigationBar.navigateToLogin();
})

// ### Scenario: Display error message on incorrect password ###
Then('the login modal should be visible', () => {
  cy.get(login.loginModalLabel).should('be.visible');
})

When('the user enters a correct email but an incorrect password', () => {
  login.submitLogin(Cypress.env('USERNAME'), '0a0a0a0a0a');
})

Then('the user should see an error message saying "Wrong password."', () => {
  cy.window().then(win => {
    cy.stub(win, 'alert').as('alert');
  });
  cy.get('@alert').should('have.been.calledWith', 'Wrong password.');

  // Assert that an error message as below is displayed when password is incorrect
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Wrong password.');
  });
})

// ### Scenario: Display error message on empty username and password ###
Then('the login modal should be visible.', () => {
  cy.get(login.loginModalLabel).should('be.visible');
})

When('the user enters an empty username and an empty password', () => {
  login.submitLogin('        ', '        ');
})

Then('the user should not see an error message saying "Wrong password."', () => {
  cy.window().then(win => {
    cy.stub(win, 'alert').as('alert');
  });

  cy.wait(1000);

  cy.get('@alert').should('not.have.been.calledWith', 'Wrong password.');

  // Assert that error message displayed should be not equal with wrong password but with incorrect email and password format
  cy.on('window:alert', (str) => {
    expect(str).to.not.equal('Wrong password.');
  });
})

// ### Scenario: Successfully login with valid credentials ###
Then("the login modal should be visible'", () => {
  cy.get(login.loginModalLabel).should('be.visible');
})

When('the user enters valid credentials', () => {
  login.submitLogin(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
})

Then('the user should see a welcome message', () => {
  // Assert that a welcome message is displayed when user login successfully
  cy.get(login.welcomeMessageSelector).should('be.visible').should('have.text', `Welcome ${Cypress.env('USERNAME')}`);
})
