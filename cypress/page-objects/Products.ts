class ProductsPage {
    
    categorieGroupsSelector = '.list-group-item';
    productsTitleSelector = '.card.h-100 .card-title';
    productName = '#tbodyid > h2';
    productPrice = '.price-container';
    productDescription = '#more-information > p';
    addToCartButton = '.btn.btn-success';
    
    selectCategorie(categorieName: string): void {
        cy.get(this.categorieGroupsSelector).contains(categorieName).click();
    }

    selectProduct(productName: string): void {
        cy.get(this.productsTitleSelector).contains(productName).click();
    }

    addToCart(): void {
        cy.get(this.addToCartButton).contains('Add to cart').click();
    }
}

export default ProductsPage;
