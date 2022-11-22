import "../support/commands"
describe("Test Movie Genres", () => {
    let tvshowWithGenre
    const genreID = '10766' //Soap Genre ID
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic genre", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
          )      
            .its("body")
            .then((response) => {
              tvshowWithGenre = response.results;
            });
        });
    
      describe("Login already created user", () => {
      
          it("Login User", () => {
           cy.LoginUser(email,password)
             });
      });
      describe("Navigate to tvshows", () => {
      
        it("Navigate to tvshows page", () => {
          cy.Navigate("TVShows")
         
        });
    
      describe("Click Genre Button", () => {
      
          it("Click Genre", () => {
            cy.ClickGenre(genreID)
           
          });
  
          it("Check the first title of movie", () => {
  
             cy.CheckCard(tvshowWithGenre[0].name)
             cy.LogoutUser()
             });
  
      });
  });
});
});
  