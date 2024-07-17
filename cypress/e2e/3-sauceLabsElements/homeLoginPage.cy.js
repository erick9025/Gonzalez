class homeLoginPage {

    elementsLoginPage = {

        userNameInput: () => cy.get('#user-name'),
        passInput: () => cy.get('#password'),
        loginbtn: () => cy.get('#login-button')

    }
    typeUserName(userName) {
        this.elementsLoginPage.userNameInput().type(userName);
    }
    typePassword(password) {
        this.elementsLoginPage.passInput().type(password);
    }
    clickLoginBtn(clickbtn) {
        this.elementsLoginPage.loginbtn().click();
    }
}

module.exports = new homeLoginPage();
