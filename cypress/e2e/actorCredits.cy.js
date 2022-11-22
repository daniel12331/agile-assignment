
describe("Test Actor Credits", () => {
    let actorCredits
    const actorID = '1136406' //Chucky TV show ID
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic credits by actor ID", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/person/${actorID}/combined_credits?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US`
          )      
            .its("body")
            .then((response) => {
                actorCredits = response.cast;
            });
        });
      
        
    describe("Login already created user", () => {
    
        it("Check if user directed to landing page when visiting the home page", () => {
         cy
         .visit("/")
        });

        it("Fill in user details", () => {
            cy.get("#email")
            .clear()
            .type(email); 
            
            cy.get("#password")
            .clear()
            .type(password);
           });

           it("Log in", () => {
            cy.get("button")
            .contains("Sign In")
            .click();  
            cy.url().should("eq", `http://localhost:3000/`);
           });

    });
  
    describe("Click Actor more info button", () => {

        it("Navigate to Actor page", () => {
            cy.get("button")
            .contains("Actors")
            .click(); 
            cy.url().should("eq", `http://localhost:3000/movies/actors`);
           });
    
        it("Click On Actor more info", () => {
        cy.get(`a[href*="actors/${actorID}"]`)
        .click()
         cy.url().should("eq", `http://localhost:3000/actors/${actorID}`);
        });

        
    });

    describe("Check Actor Credits are correct", () => {
        it("Check the first title of tvshow", () => {
            cy.wait(2000) // wait 2 seconds for data to fetch and display
            cy.get(".MuiCardHeader-content").eq(0)
            .contains(actorCredits[0].original_title)
        });
    });
});
});

  