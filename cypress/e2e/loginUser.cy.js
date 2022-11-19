
describe("Login User", () => {

    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Login already created user", () => {
    
        it("Check if user directed to landing page when visiting the home page", () => {
         cy.visit("/")
        });

        it("Fill in user details", () => {
            cy.get("#email").clear().type(email); 
            cy.get("#password").clear().type(password);
           });

           it("Log in", () => {
            cy.get("button").contains("Sign In").click();  
           });
    });

    describe("Check if login was successful", () => {
        it("Check if username is correct", () => {
         cy.get(".MuiTypography-h4").contains(email)
        });
        it("Then logout and check if we are back at landing page", () => {
         cy.get("button").contains("Logout").click()
         cy.url().should("eq", `http://localhost:3000/landing`);
        });
      });
});
