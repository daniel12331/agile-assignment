import "../support/commands"

describe("Register User", () => {

  const name = "Daniel Marko";
  const email = "daniel123@gmail.com"
  const password = "123456"
  const cpassword = "123456"

  describe("Register an account", () => {
    
    it("Check we are cant go into home page withouth auth, Create an account", () => {
     cy.registerUser(name,email,password,cpassword);
     
     });
    });

    describe("Check if registration was successful", () => {
      
     it("Check if username is correct", () => {
      cy.get(".MuiTypography-h4").contains(email)
    
     });

     it("Then logout and check if we are back at landing page", () => {
      cy.LogoutUser();
     });

   });

});