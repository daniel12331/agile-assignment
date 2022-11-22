import "../support/commands"


describe("Test Actor Credits", () => {
    let actorCredits
    const ID = '1136406' //Chucky TV show ID
    const email = "daniel123@gmail.com"
    const password = "123456"
    const type = "actors"

    describe("Get specfic credits by actor ID", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/person/${ID}/combined_credits?api_key=${Cypress.env(
              "TMDB_KEY"
            )}&language=en-US`
          )      
            .its("body")
            .then((response) => {
                actorCredits = response.cast;
            });
        });
      
        
    describe("Login already created user", () => {
        it("Login User", () => {
            cy.LoginUser(email,password)
            
           });

    });
  
    describe("Click Actor more info button", () => {

        it("Navigate to Actor page", () => {
            cy.Navigate("Actors")
           });
    

        it("Click On Actor more info", () => {
            cy.MoreInfo(ID,type)
        });

        
    });

    describe("Check Actor Credits are correct", () => {
        it("Check the first title of tvshow", () => {
        
           cy.CheckCard(actorCredits[0].original_title);
   
           cy.LogoutUser()
        });
    });

});
}); 
