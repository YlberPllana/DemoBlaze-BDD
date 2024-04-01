Feature: Signup functionality

    Scenario: User signs up or creates an account
        Given the user is on the signup page
        When the user provides valid email and password
        Then the user should see a success message saying 'Sign up successful.'

    Scenario: User logs in with already created account
        Given the user is on the login page of DemoBlaze
        When the user logs in with their saved credentials
        Then the user should see a welcome message with their email
