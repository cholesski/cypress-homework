import data from "../fixtures/data.json"

beforeEach( () => {
  cy.visit('https://www.saucedemo.com/v1/')
}); 

describe('Test case 2', () => {
  it("sorting inventory verification", () => {
    cy.get('#user-name').type(data.userDataValid.username);
    cy.get('#password').type(data.userDataValid.password);
    cy.get('#login-button').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    cy.get('.product_sort_container').select('za');
    cy.get('.inventory_list').first().should('include.text', 'Test.allTheThings() T-Shirt (Red)');
  });
});