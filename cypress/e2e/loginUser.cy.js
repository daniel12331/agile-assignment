import "../support/commands"
describe("Login User", () => {

    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Login already created user +Check if login was successful", () => {
    it("Login User", () => {
    cy.LoginUser(email,password)
    cy.LogoutUser()
    });
    });
       
     
});
