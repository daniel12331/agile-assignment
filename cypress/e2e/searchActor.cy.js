import "../support/commands"
describe("Test Search Movie", () => {
    let actorList
    const actorQuery = 'Tom Hanks' //Actor Query
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic actor by search key", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/search/person?api_key=${Cypress.env(
                "TMDB_KEY"
              )}&language=en-US&include_adult=false&include_video=false&page=1&query=${actorQuery}`
          )      
          
            .its("body")
            .then((response) => {
                actorList = response.results;
            });
        });
      
        
    describe("Login already created user", () => {
    
        it("Login User", () => {
            cy.LoginUser(email,password)
           });

    });

    describe("Navigate to search page and click Actor tab", () => {

        it("Navigate to search page ", () => {
            cy.Navigate("Search")
            cy.url().should("eq", `http://localhost:3000/searchpage`);
           });

           it("Click Actor tab", () => {
            cy.Navigate("Search Actors")
           });
    });
  
    describe("Search Query in search box", () => {

        it("Input actorQuery into search box", () => {
            cy.InputQuery(actorQuery)
           });

           
         
    });

    describe("Check if actorList has same results", () => {
        
        it("Check the first title of actor results", () => {
            cy.CheckCard(actorList[0].name)
            cy.LogoutUser()
           });
    });

});
});

  