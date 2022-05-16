# Description

This app was created as a learning exercise to gain experience with RESTFUL development, in this case integrating a React frontend and an Express/Node backend.

## Authentication

User is authenticated using JWT tokens and Passport strategies.

All destructive actions are authenticated server side and frontend routes are protected by a component that redirects the user to the login page if authentication fails at any point.

## Features

User can Create, Read, Update and Delete blog posts and comments.

If you wish to test out the App, the password is 9114

https://legandjl.github.io/blog_admin/

The application allows editing markdown in browser, allowing the user to view how the blog post will be rendered before submitting it.

## Notes

App is not optimised for mobile devices, as this was primarily an exercise in getting the frontend and backend communicating I decided to keep the frontend design simple.

The backend of this application can be viewed here: - //link

And the standard (non admin) frontend of the blog can be viewed here:- //link
Both applications use the same backend.

## Thoughts on the process

I enjoyed working on this application and have found that I prefer developing in this way as opposed to following the MVC pattern. I found it intuitive to have a clear separation of concerns of the frontend and the backend, and enjoyed jumping between the two and tweaking things. I feel I now have a solid grasp on the fundementals of developing applications in this way, and look forwards to building on this knowledge going forwards.
