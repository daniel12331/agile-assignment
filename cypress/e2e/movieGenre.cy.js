import "../support/commands"
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
         cy.LoginUser(email,password)
           });
    });
  
    describe("Click Genre Button", () => {
    
        it("Click Genre", () => {
          cy.ClickGenre(genreID)
         
        });

        it("Check the first title of movie", () => {

           cy.CheckCard(moviesWithGenre[0].original_title)
           cy.LogoutUser()
           });

    });

});
});

  