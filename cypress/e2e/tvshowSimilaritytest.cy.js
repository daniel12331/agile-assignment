
describe("Test Movie Genres", () => {
    let similarTvShowID
    const tvshowID = '90462' //Chucky TV show ID
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic similar tv shows by ID", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/tv/${tvshowID}/similar?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&page=1`
          )      
          
            .its("body")
            .then((response) => {
                similarTvShowID = response.results;
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
  
    describe("Click TVShow more info button", () => {

        it("Navigate to TV Show page", () => {
            cy.get("button")
            .contains("TVShows")
            .click(); 
            cy.url().should("eq", `http://localhost:3000/movies/tvshows`);
           });
    
        it("Click On TV Show more info", () => {
        cy.get(`a[href*="tvshows/${tvshowID}"]`)
        .click()
         cy.url().should("eq", `http://localhost:3000/tvshows/${tvshowID}`);
        });

        it("Check the first title of tvshow", () => {
            cy.get(".MuiCardHeader-content").eq(0)
            .contains(similarTvShowID[0].original_name)
           });

    });

});
});

  