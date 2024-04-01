import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../page-objects/Login";
import SignupPage from "../../../page-objects/Signup";
import NavigationBar from "../../../page-objects/NavigationBar";
import { faker } from '@faker-js/faker';

const login = new LoginPage();
const signup = new SignupPage();
const navigationBar = new NavigationBar();

let generatedEmail: string;
let generatedPassword: string;

// ### Scenario: User signs up or creates an account ###
Given('the user is on the signup page', () => {
  cy.visit('/');
  navigationBar.navigateToSignUp();
});

When('the user provides valid email and password', () => {
  generatedEmail = faker.internet.email();
  generatedPassword = faker.internet.password();
  
  signup.createAccount(generatedEmail, generatedPassword);
});

Then("the user should see a success message saying 'Sign up successful.'", () => {
  // Assert that a success message is displayed when user successfully creates an account
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.');
  });

  cy.writeFile('cypress/fixtures/randomCredentials.json', { generatedEmail, generatedPassword });
  cy.wait(5000);
});

// ### Scenario: User logs in with already created account ###
Given('the user is on the login page of DemoBlaze', () => {
  cy.visit('/');
});

When('the user logs in with their saved credentials', () => {
  cy.readFile('cypress/fixtures/randomCredentials.json').then((data) => {
    // Use the saved email and password
    cy.login(data.generatedEmail, data.generatedPassword);
  });
});

Then('the user should see a welcome message with their email', () => {
  cy.readFile('cypress/fixtures/randomCredentials.json').then((data) => {
    cy.get(login.welcomeMessageSelector)
      .should('be.visible')
      .should('have.text', `Welcome ${data.generatedEmail}`);
  });
});
