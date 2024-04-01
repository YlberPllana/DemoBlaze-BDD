class LoginPage {

    loginModalLabel = '#logInModalLabel';
    username = '#loginusername';
    password = '#loginpassword';
    loginButton = '.btn.btn-primary';
    welcomeMessageSelector = '#nameofuser';

    typeUsername(username: string): void {
        cy.get(this.username).should('be.visible').should('be.enabled').type(username);
    }

    typePassword(password: string): void {
        cy.get(this.password).should('be.visible').should('be.enabled').type(password);
    }

    clickLoginButton(): void {
        cy.get(this.loginButton).contains('Log in').click();
    }

    submitLogin(username: string, password: string): void {
        cy.wait(1000);
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
    }
}

export default LoginPage;
