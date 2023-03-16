class LoginPage {
    getUserName() {
        return cy.get('#user-name');
    }

    getPassword() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#login-button');
    }

    getAppLogo() {
        return cy.get('.app_logo');
    }

    getErrorMessage() {
        return cy.get('.error-message-container');
    }
}

export const loginPage = new LoginPage();