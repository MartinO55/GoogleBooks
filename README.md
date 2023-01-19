# Google Books API Search Engine

## Outline

This project will require you to use both DOM manipulation and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

Okay, so we can either do this in react or in basic JS/HTML. I am tempted to just use basic JS, as doing it in React will require useState and UseEffect, which could be difficult in the time available, given we are working with Google and not our own back end. All the info requried by the MVP comes back in the request, so it is just select it and show it.

The landing page needs a centered search bar that takes the query to the API and returns it. Following this, we need to display a flex of Cards showing the books that match. I feel like we can do this as an SPA, by moving the search bar up the screen on submit and displaying our grid in its place. you could also go to a new page while loading the results, but that might be annoying...

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button

- A grid of books
  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules.
- Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

## Bonus (optional, but highly recommended)

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Useful Resources

- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Download Postman](https://www.postman.com/downloads/)
