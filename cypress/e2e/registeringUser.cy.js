
describe("Register User", () => {

  const name = "Daniel Marko";
  const email = "daniel123@gmail.com"
  const password = "123456"
  const cpassword = "123456"

  describe("Register an account", () => {
    
    it("Check if user directed to landing page when visiting the home page", () => {
     cy.visit("/")
     cy.get("a").contains("Not a member yet?").click();
    
    });

    it("Create an account", () => {
     
      cy.get("#name").clear().type(name);   
      cy.get("#email").clear().type(email); 
      cy.get("#password").clear().type(password);
      cy.get("#confirmpasssword").clear().type(cpassword); 

      cy.get("button").contains("Register").click();  
      cy.url().should("eq", `http://localhost:3000/`);
     
     });
    });

    describe("Check if registration was successful", () => {
      
     it("Check if username is correct", () => {
      cy.get(".MuiTypography-h4").contains(email)
    
     });

     it("Then logout and check if we are back at landing page", () => {
      cy.get("button").contains("Logout").click()

      cy.url().should("eq", `http://localhost:3000/landing`);
     });

   });

});