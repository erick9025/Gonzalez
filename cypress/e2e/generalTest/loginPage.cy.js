/// <reference types="cypress" />
describe('My first Login', () => {

    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/')
    })
    it('My first login',()=>{
        cy.log("Hello culeros");
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
});