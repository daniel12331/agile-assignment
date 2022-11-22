

Cypress.Commands.add('registerUser', (name,email,password,cpassword) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    cy.visit("/")
    cy.get("a").contains("Not a member yet?").click();

    cy.get("#name").clear().type(name);   
      cy.get("#email").clear().type(email); 
      cy.get("#password").clear().type(password);
      cy.get("#confirmpasssword").clear().type(cpassword); 

      cy.get("button").contains("Register").click();  
      cy.url().should("eq", `http://localhost:3000/`);
  
  });




  Cypress.Commands.add('LogoutUser', () => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    cy.get("button").contains("Logout").click()
  
    cy.url().should("eq", `http://localhost:3000/landing`);
  
  });


  Cypress.Commands.add('LoginUser', (email,password) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })
         cy.visit("/")

         cy.get("#email").clear().type(email); 
         cy.get("#password").clear().type(password);

         cy.get("button").contains("Sign In").click();  

         cy.get(".MuiTypography-h4").contains(email)
      

  
  });




