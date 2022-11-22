
describe("Test Search TV Show", () => {
    let tvshowList
    const tvShowQuery = 'Simpson' //TV show Query
    const email = "daniel123@gmail.com"
    const password = "123456"

    describe("Get specfic tv show by search key", () => {
        before(() => {
          cy.request(
            `https://api.themoviedb.org/3/search/tv?api_key=${Cypress.env(
                "TMDB_KEY"
              )}&language=en-US&include_adult=false&include_video=false&page=1&query=${tvShowQuery}`
          )      
          
            .its("body")
            .then((response) => {
                tvshowList = response.results;
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

    describe("Navigate to search page and click tvShow tab", () => {

        it("Navigate to search page ", () => {
            cy.get("button")
            .contains("Search")
            .click(); 
            cy.url().should("eq", `http://localhost:3000/searchpage`);
           });

           it("Click TV Show tab", () => {
            cy.get("button")
            .contains("Search TV Shows")
            .click(); 
           });
    });
  
    describe("Search Query in search box", () => {

        it("Input tvshowQuery into search box", () => {
            cy.get("#search_box")
            .clear()
            .type(tvShowQuery)
           });

           it("Click search button", () => {
            cy.get("#search_query")
            .click()
           });
         
    });

    describe("Check if tvshowList has same results", () => {
        
        it("Check the first title of tvshow", () => {
            cy.wait(2000) //wait 2 seconds for data to fetch

            cy.get(".MuiCardHeader-content").eq(0)
            .contains(tvshowList[0].name)
           });
    });

});
});

  