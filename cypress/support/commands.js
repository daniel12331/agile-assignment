import { shouldSkipGeneratingVar } from "@mui/material";


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

  Cypress.Commands.add('Navigate', (tab) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    cy.get("button")
    .contains(tab)
    .click(); 
  });

  Cypress.Commands.add('MoreInfo', (ID,type) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    cy.get(`a[href*="${type}/${ID}"]`)
    .click()
     cy.url().should("eq", `http://localhost:3000/${type}/${ID}`);
  });

  Cypress.Commands.add('CheckCard', (dataCheck) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    cy.wait(2000) // wait 2 seconds for data to fetch and display
   
    cy.get(".MuiCardHeader-content").eq(0)
    .contains(dataCheck)
   
  });

  Cypress.Commands.add('ClickGenre', (genreID) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })

        cy.get(`#${genreID}`)
        .should('have.id', genreID)
        .click()
  });

  Cypress.Commands.add('NavigateElement', (element) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    cy.get(`a[href*="reviews/form"]`)
     .click()
  });

  Cypress.Commands.add('InputQuery', (query) => {

    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    })

   
        cy.get("#search_box")
        .clear()
        .type(query)
  
        cy.get("#search_query")
        .click()
  });

  






