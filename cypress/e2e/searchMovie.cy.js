import "../support/commands"
describe("Test Search Movie", () => {
    let movieList
    const movieQuery = 'Spiderman' //Movie Query
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic movie by search key", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
                "TMDB_KEY"
              )}&language=en-US&include_adult=false&include_video=false&page=1&query=${movieQuery}`
          )      
          
            .its("body")
            .then((response) => {
                movieList = response.results;
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
                cy.Navigate("Search Movies")
               });
        });
      
        describe("Search Query in search box", () => {
    
            it("Input actorQuery into search box", () => {
                cy.InputQuery(movieQuery)
               });
    
               
             
        });
    
        describe("Check if actorList has same results", () => {
            
            it("Check the first title of actor results", () => {
                cy.CheckCard(movieList[0].title)
               });
        });
    
    });

});


  