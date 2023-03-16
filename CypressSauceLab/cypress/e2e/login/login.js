import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from "../page_object/login";
import * as  loginData from "../../fixtures/loginData.json"

Given('I am on the Sauce Demo Login Page', () => {
  cy.visit(loginData.appUrl);
});

When('I fill the account information for account StandardUser into the Username field and the Password field', () => {
  loginPage.getUserName().type(loginData.standard_user);
  loginPage.getPassword().type(loginData.password);
});

When('I fill the account information for account LockedOutUser into the Username field and the Password field', () => {
  loginPage.getUserName().type(loginData.locked_out_user);
  loginPage.getPassword().type(loginData.password);
});

When('I click the Login Button', () => {
  loginPage.getLoginButton().click();
});

Then('I am redirected to the Sauce Demo Main Page', () => {
  cy.url().should('include', '/inventory.html');
});

Then('I verify the App Logo exists', () => {
  loginPage.getAppLogo().should('be.visible');
})

Then('I verify the Error Message contains the text {string}', (errorMessage) => {
  loginPage.getErrorMessage().should('contain.text', errorMessage);
});
