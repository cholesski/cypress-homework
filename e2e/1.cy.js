import data from "../fixtures/data.json"

beforeEach( () => {
  cy.visit('https://www.saucedemo.com/v1/')
}); 

describe('Test case 1', () => {
  it("unsuccessful login verification", () => {
    cy.get('#user-name').type(data.userDataInvalid.username);
    cy.get('#password').type(data.userDataInvalid.password);
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('be.visible').and('include.text', 'Epic sadface: Username and password do not match any user in this service');
  });
});