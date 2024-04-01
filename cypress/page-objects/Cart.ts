class CartPage {

    productName = '.success > td:nth-child(2)';
    productPrice = '.success > td:nth-child(3)';
    deleteProductSelector = '.success > td:nth-child(4) > a';
    totalCartPrice = '#totalp';
    placeOrderButton = '[data-target="#orderModal"]';
    orderModalLabel = '#orderModalLabel';
    totalPriceOnOrderModal = '#totalm';
    clientName = '#name';
    country = '#country';
    city = '#city';
    creditCard = '#card';
    month = '#month';
    year = '#year';
    purchaseButton = '.btn.btn-primary';
    tableOfProducts = '.success';
    purchaseConfirmationSelector = '.sweet-alert > h2';
    okButton = '.confirm.btn';

    deleteProductFromCart(): void {
        cy.get(this.deleteProductSelector).click();
    }

    placeOrder(): void {
        cy.get(this.placeOrderButton).should('be.visible').should('be.enabled').click();
    }

    typeClientName(name: string): void {
        cy.get(this.clientName).should('be.visible').should('be.enabled').type(name);
    }

    typeCountry(country: string): void {
        cy.get(this.country).should('be.visible').should('be.enabled').type(country);
    }

    typeCity(city: string): void {
        cy.get(this.city).should('be.visible').should('be.enabled').type(city);
    }

    typeCreditCard(card: string): void {
        cy.get(this.creditCard).should('be.visible').should('be.enabled').type(card);
    }

    typeMonth(month: string): void {
        cy.get(this.month).should('be.visible').should('be.enabled').type(month);
    }

    typeYear(year: string): void {
        cy.get(this.year).should('be.visible').should('be.enabled').type(year);
    }

    purchaseOrder(): void {
        cy.get(this.purchaseButton).should('be.visible').should('be.enabled').contains('Purchase').click();
    }
}

export default CartPage;
