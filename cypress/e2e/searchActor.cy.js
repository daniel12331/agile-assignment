
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

    describe("Navigate to search page and click Actor tab", () => {

        it("Navigate to search page ", () => {
            cy.get("button")
            .contains("Search")
            .click(); 
            cy.url().should("eq", `http://localhost:3000/searchpage`);
           });

           it("Click Actor tab", () => {
            cy.get("button")
            .contains("Search Actors")
            .click(); 
           });
    });
  
    describe("Search Query in search box", () => {

        it("Input actorQuery into search box", () => {
            cy.get("#search_box")
            .clear()
            .type(actorQuery)
           });

           it("Click search button", () => {
            cy.get("#search_query")
            .click()
           });
         
    });

    describe("Check if actorList has same results", () => {
        
        it("Check the first title of actor results", () => {
            cy.wait(2000) //wait 2 seconds for data to fetch

            cy.get(".MuiCardHeader-content").eq(0)
            .contains(actorList[0].name)
           });
    });

});
});

  