/// <reference types="cypress" />

import LoginPage from "../page-objects/Login";
import NavigationBar from "../page-objects/NavigationBar";
const login = new LoginPage();
const navigationBar = new NavigationBar();

declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        login(username: string, password: string): Chainable<Subject>;
      }
    }
}
  
Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('/');
    navigationBar.navigateToLogin();
    login.submitLogin(username, password);
});
  