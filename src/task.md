Task today is to implement what is visually described in src/task-mockup.png file.

CircleCI API documentation is here : https://circleci.com/docs/api/

App should redirect to a route to insert API key, if no valid key is provided.
(Store the key in local or session storage - I leave it up to you to decide what's better in this case)

List the latest builds on app root page, and each item should link to a page where details on build should be displayed.


+ Bonus Task

Add two dropdowns to the root page - one to select a project, and another one to select a branch: if no project is selected, branch dropdown should be disabled. Each time a project/branch is selected, list should be refreshed (call API endpoint for this, don't filter)


++ For those who finish all of this in less than 2 hours:

https://github.com/toddmotto/public-apis

Choose whichever of the categories and APIs you fancy and make an app to display a page with list of items, and single page for each item to display more details. This item page should always display the item details: so if there's no info stored in reducer, fetch details from API for that exact item.
