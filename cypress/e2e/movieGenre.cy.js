
describe("Test Movie Genres", () => {
    let moviesWithGenre
    const genreID = '35' //Western Genre ID
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic genre", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
          )      
            .its("body")
            .then((response) => {
              moviesWithGenre = response.results;
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
  
    describe("Click Genre Button", () => {
    
        it("Click Genre", () => {
         cy.get(`#${genreID}`)
         .should('have.id', genreID)
         .click()
        });

        it("Check the first title of movie", () => {
            cy.get(".MuiCardHeader-content").eq(0)
            .contains(moviesWithGenre[0].title)
           });

    });

});
});

  