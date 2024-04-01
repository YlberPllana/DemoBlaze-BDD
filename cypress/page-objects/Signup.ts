import NavigationBar from './NavigationBar';
const navigationBar = new NavigationBar();

class SignupPage {

    signupUsername = '#sign-username';
    signupPassword = '#sign-password';
    signupButton = '.btn.btn-primary';

    createAccount(username: string, password: string) {
        cy.visit('/');
        navigationBar.navigateToSignUp();
        cy.wait(1000);
        cy.get(this.signupUsername).should('be.visible').should('be.enabled').type(username);
        cy.get(this.signupPassword).should('be.visible').should('be.enabled').type(password);
        cy.get(this.signupButton).contains('Sign up').click();    
    }
}

export default SignupPage;
