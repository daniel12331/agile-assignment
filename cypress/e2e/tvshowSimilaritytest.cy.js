import "../support/commands"
describe("Test tv show similarity", () => {
    let similarTvShowID
    const ID = '90462' //Chucky TV show ID
    const email = "daniel123@gmail.com"
    const password = "123456"
    const type = "tvshows"

    describe("Get specfic similar tv shows by ID", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/tv/${ID}/similar?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US&page=1`
          )      
          
            .its("body")
            .then((response) => {
                similarTvShowID = response.results;
            });
        });
      
        describe("Login already created user", () => {
          it("Login User", () => {
              cy.LoginUser(email,password)
              
             });
  
      });
    
      describe("Click TV show more info button", () => {
  
          it("Navigate to Actor page", () => {
              cy.Navigate("TVShows")
             });
      
  
          it("Click On Actor more info", () => {
              cy.MoreInfo(ID,type)
          });
  
          
      });
  
      describe("Check Actor Credits are correct", () => {
          it("Check the first title of tvshow", () => {
          
             cy.CheckCard(similarTvShowID[0].original_name);
     
             cy.LogoutUser()
          });
        });
});
});

  