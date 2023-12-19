import data from '../fixtures/data.json'

describe('Test Case 4', () => {
    it("Product buying verification", () => {  
      cy.visit('https://www.saucedemo.com/');  
      cy.get('#user-name').type(data.userDataValid.username);
      cy.get('#password').type(data.userDataValid.password);
      cy.get('#login-button').click();
      cy.url().should('equals', 'https://www.saucedemo.com/inventory.html');
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.inventory_item_name').should('include.text', 'Sauce Labs Backpack')
      cy.get('#checkout').click();
      cy.get('#first-name').type(data.customer.firstname);
      cy.get('#last-name').type(data.customer.lastname);
      cy.get('#postal-code').type(data.customer.zip);
      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.get('.complete-header').should('include.text', 'Thank you for your order!');
    });
  });
  