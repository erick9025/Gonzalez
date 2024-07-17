import homeLoginPageCy from "../3-sauceLabsElements/homeLoginPage.cy";

describe('Login Page scenarios', () => {

    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/')
    })
    it('Login into page succesfully!',()=>{
        homeLoginPageCy.typeUserName('standard_user');
        homeLoginPageCy.typePassword('secret_sauce');
        homeLoginPageCy.clickLoginBtn();
    });
});

