import "../support/commands"
describe("Review Movie test", () => {
    
    const email = "daniel123@gmail.com"
    const password = "123456"

    const authorName = "Daniel"
    const reviewText = "This movie is good."
        
    describe("Login already created user", () => {
    
        it("Login User", () => {
         cy.LoginUser(email,password)
        });

       

    });

    describe("Favourite the first movie", () => {

        it("Check the card before and after clicking favourite", () => {
            cy.get(".MuiCardHeader-root")
            .eq(0)
            .find("svg")
            .should("not.exist");

            cy.get("button[aria-label='add to favorites']")
            .eq(0)
            .click();

            cy
            .get(".MuiCardHeader-root")
            .eq(0)
            .find("svg");
           });
    });
  
    describe("Navigate to favourite page", () => {

        it("Go to favourite page", () => {
            cy.Navigate("Favorites");
        });
        
        it("Check favourites", () => {
            cy.url().should("eq", `http://localhost:3000/movies/favorites`);
            cy.get(".MuiCardHeader-content")
            .should("have.length", 1);
           });
         
    });

    describe("Add movie review", () => {

        it("Navigate to review form", () => {
           cy.NavigateElement('a[href*="reviews/form"]')
        });
        
        it("Fill in review details and select rating", () => {
            cy.url().should("eq", `http://localhost:3000/reviews/form`);
            cy.get("#author")
            .clear()
            .type(authorName); 

            cy.get("#review")
            .clear()
            .type(reviewText); 

            cy.get("#select-rating")
            .click();

            cy.contains('Good')
            .click()

            cy.get('button')
            .contains('Submit')
            .click()
           });

           it("Check if you review was submitted successfully", () => {
            cy.get(".MuiAlert-message")
            .contains('Thank you for submitting a review')

            cy.get('body').click(50, 50, { force: true })
           
            cy.LogoutUser()
           });
        
    });


});

  