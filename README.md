# Description

This app was created as a learning exercise to gain experience with RESTFUL development, in this case integrating a React frontend and an Express/Node backend.

## Authentication

User is authenticated using JWT tokens and Passport strategies.

All destructive actions are authenticated server side and frontend routes are protected by a component that redirects the user to the login page if authentication fails at any point.

## Features

User can Create, Read, Update and Delete blog posts and comments.

Posts and Comments use pagination to load data in blocks.

The application allows editing markdown in browser, allowing the user to view how the blog post will be rendered before submitting it.

## Notes

The application is not currently optimised for mobile devices. As this was primarily an exercise in getting the frontend and backend communicating I decided to keep the frontend design simple.

## Details

The backend of this application can be viewed here:

https://github.com/Legandjl/blog

And the public facing frontend can be viewed here:

https://github.com/Legandjl/blog_front

## Thoughts on the process

I enjoyed working on this application and have found that I prefer developing in this way as opposed to following the MVC pattern. I found it intuitive to have a clear separation of concerns of the frontend and the backend, and enjoyed jumping between the two and tweaking things. I feel I now have a solid grasp on the fundementals of developing applications in this way, and look forwards to building on this knowledge going forwards.

## Live Demo

If you wish to test out the App, the password is 9114. Please don't delete any posts that have already been created, feel free to create, delete and edit your own.
https://legandjl.github.io/blog_admin/
