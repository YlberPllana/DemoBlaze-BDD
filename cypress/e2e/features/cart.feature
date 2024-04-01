Feature: Product cart functionality

    Background:
        Given the user is logged in with valid username and password
        When the user selects the category "Monitors"
        And the user selects the product "Apple monitor 24"
        Then the product name should be "Apple monitor 24"
        And the product price should be "$400 *includes tax"
        And the product description should not be empty
        When the user adds the product to the cart
        Then an alert with message "Product added." should be displayed
        When the user navigates to the cart
        Then the product name in the cart should be "Apple monitor 24"
        And the product price in the cart should be "400"
        And the total cart price should be "400"

    Scenario: User adds and deletes a product from the cart
        When the user deletes the product from the cart
        Then the product should not be visible in the cart

    Scenario: User purchases a product
        When the user places an order
        And the user types client name as "Ylber"
        And the user types country as "Kosovo"
        And the user types city as "Vushtrri"
        And the user types credit card number as "0000-0000-0000-0000"
        And the user types month as "April"
        And the user types year as "2024"
        And the user confirms the purchase order
        Then a purchase confirmation message should be displayed as "Thank you for your purchase!"
        And the user clicks on the OK button