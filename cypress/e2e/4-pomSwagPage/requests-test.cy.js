/// <reference types="cypress" />
describe('API test', () => {  
    it('Get', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities'
        }).then(res => {
            console.log(res); // Add this line to log the response
            expect(res.status).to.eq(200);
        });
    });

});

