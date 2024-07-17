/// <reference types="cypress" />
describe('My first Login', () => {

    beforeEach(function () {
        cy.visit('https://www.bstackdemo.com/')
    })
    it('My first login',()=>{
        cy.log('hello');
    });
});