
# Assignment 1 - Agile Software Practice.

__Name:__ Daniel Marko

This repository contains the implementation of a React App and its associated Cypress tests and GitLab CI pipeline.

## React App Features.
 
+ Firebase Authentication
+ Popular TV Show page
+ Popular Actors page
+ Detailed TV Show
+ List of Similar TV Shows
+ Detailed Actor Page
+ List of Shows + Movies the Actor has been in
+ Genre Filter for Movies
+ Genre Filter for TV Shows
+ Searching Movies 
+ Searching TV Shows
+ Searching Actors
+ Pagination
+ Caching

## Automated Tests.

### Best test cases.

+ cypress/e2e/reviewTest.cy.js
+ cypress/e2e/actorCredits.cy.js

### Cypress Custom commands (if relevant).

+ actorCredits.cy.js
+ loginUser.cy.js
+ movieGenre.cy.js
+ registeringUser.cy.js
+ reviewTest.cy.js
+ searchActor.cy.js
+ searchMovie.cy.js
+ searchTVShow.cy.js
+ tvshowGenre.cy.js
+ tvshowSimilaritytest.cy.js


## Code Splitting.

+ src/index.js

## Pull Requests.

https://github.com/daniel12331/agile-assignment

## Independent learning (If relevant).

+ Custom Commands / Error Handling - cypress/support/command - Custom cypress commands that are reused in some of the tests, implemented with error handling also
![](./images/Screenshot_1.png)

+ Code Splitting - src/index
![](./images/Screenshot_2.png)

+ Using new cypress functionality - cypress/support/command - Using new cypress functionality like .should(), .wait().....
![](./images/Screenshot_3.png)

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
