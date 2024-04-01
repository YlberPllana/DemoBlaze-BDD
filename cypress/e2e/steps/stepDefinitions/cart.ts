import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavigationBar from "../../../page-objects/NavigationBar";
import ProductsPage from "../../../page-objects/Products";
import CartPage from "../../../page-objects/Cart";

const navigationBar = new NavigationBar();
const products = new ProductsPage();
const cart = new CartPage();

// ### Common steps for two scenarios ###
Given('the user is logged in with valid username and password', () => {
    cy.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
});

When('the user selects the category {string}', () => {
    products.selectCategorie('Monitors');
});

When('the user selects the product {string}', () => {
    products.selectProduct('Apple monitor 24');
});

Then('the product name should be {string}', () => {
    cy.get(products.productName).should('have.text', 'Apple monitor 24');
});

Then('the product price should be {string}', () => {
    cy.get(products.productPrice).should('have.text', '$400 *includes tax');
});

Then('the product description should not be empty', () => {
    cy.get(products.productDescription).should('not.be.empty');
});

When('the user adds the product to the cart', () => {
    products.addToCart();
});

Then('an alert with message {string} should be displayed', () => {
    cy.window().then(win => {
        cy.stub(win, 'alert').as('alert');
    });
    cy.get('@alert').should('have.been.calledWith', 'Product added.');
});

When('the user navigates to the cart', () => {
    navigationBar.navigateToCart();
});

Then('the product name in the cart should be {string}', () => {
    cy.get(cart.productName).should('have.text', 'Apple monitor 24');
});

Then('the product price in the cart should be {string}', () => {
    cy.get(cart.productPrice).should('have.text', '400');
});

Then('the total cart price should be {string}', () => {
    cy.get(cart.totalCartPrice).should('have.text', '400');
});

// ### Scenario: User adds and deletes a product from the cart ###
When('the user deletes the product from the cart', () => {
    cart.deleteProductFromCart();
});

Then('the product should not be visible in the cart', () => {
    cy.get(cart.tableOfProducts).should('not.exist');
});

// ### Scenario: User purchases a product ###
When('the user places an order', () => {
    cart.placeOrder();
});

Then('the user types client name as {string}', () => {
    cart.typeClientName('Ylber');
});

Then('the user types country as {string}', () => {
    cart.typeCountry('Kosovo');
});

Then('the user types city as {string}', () => {
    cart.typeCity('Vushtrri');
});

Then('the user types credit card number as {string}', () => {
    cart.typeCreditCard('0000-0000-0000-0000');
});

Then('the user types month as {string}', () => {
    cart.typeMonth('April');
});

Then('the user types year as {string}', () => {
    cart.typeYear('2024');
});

Then('the user confirms the purchase order', () => {
    cart.purchaseOrder();
});

Then('a purchase confirmation message should be displayed as {string}', () => {
    cy.get(cart.purchaseConfirmationSelector).should('have.text', 'Thank you for your purchase!');
});

Then('the user clicks on the OK button', () => {
    cy.get(cart.okButton).click();
});
