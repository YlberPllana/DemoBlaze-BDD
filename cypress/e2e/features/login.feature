Feature: Login Functionality

  Background:
    Given the user is on the login page

  Scenario: Display error message on incorrect password
    Then the login modal should be visible
    When the user enters a correct email but an incorrect password
    Then the user should see an error message saying "Wrong password."

  Scenario: Display error message on empty username and password
    Then the login modal should be visible.
    When the user enters an empty username and an empty password
    Then the user should not see an error message saying "Wrong password."

  Scenario: Successfully login with valid credentials
    Then the login modal should be visible'
    When the user enters valid credentials
    Then the user should see a welcome message
