#Agile Assingment

## Automated E2E Tests
### Tests Functionality

+ actorCredits.cy.js - Tests if actors tvshows/movies are displayed.
+ loginUser.cy.js - Checks if user is authenticated if not login user.
+ movieGenre.cy.js - Tests the filtering of movie genres on discover movie page.
+ registeringUser.cy.js - Tests the registration page, see if the page is directed to home page.
+ reviewTest.cy.js - Tests the review function.
+ searchActor.cy.js - Tests if specific search query.
+ searchMovie.cy.js - Tests if specific movie query.
+ searchTVShow.cy.js - Tests if specific tv show query.
+ tvshowGenre.cy.js - Tests the filtering of tv show genres on tv show page.
+ tvshowSimilaritytest.cy.js - Tests specific the similarity shows displayed when choosing a specific tv show.

### Custom Commands / Error Handling

All the above tests are implemented with custom commands where some commands are used in the same test scripts, also all custom commands have error handling implemented.

## Continuous Integration / Source Control

### Branching Policy / Pull Requests

In the github commit history you will notice the first tests that were created(without custom commands) are commited to the develop branch but I made the mistake to merge them to the main each time, you will see another set of commits with custom commands and for each one there is a pull request and merged to the main branch.

For Gitlab I commited to the develop branch and did install-build and requested a merge to the main branch, which will merge after the CI pipeline has passed successfully in the develop branch, then in the main branch the CI pipeline Stages was as follows install-build-testing.
