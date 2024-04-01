class NavigationBar {

    loginButton = '#login2';
    cartButton = '#cartur';
    signupButton = '#signin2';

    navigateToLogin() {
        cy.get(this.loginButton).click();
    }

    navigateToCart() {
        cy.get(this.cartButton).click();
    }

    navigateToSignUp() {
        cy.get(this.signupButton).click();
    }
}

export default NavigationBar;
