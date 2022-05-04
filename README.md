# Admin portal for blog application

This app was created as a learning aid to gain experience in RESTFUL development, in this case integrating a React front end and an Express backend.

# Admin is authenticated using JWT tokens and Passport strategies.

All destructive actions are authenticated server side, routes are protected on the front end by a protected route component which redirects the user to login if authentication fails at any point.

# Admin can Create, Read, Update and Delete posts and comments.

If you wish to test out the App, the password is 9114.

# Notes

App is not optimised for mobile devices, as this was primarily an exercise in getting the frontend and backend communicating I decided to keep the frontend design simple.

The backend of this application can be viewed here: - //link

And the standard (non admin) frontend of the blog can be viewed here:- //link
Both applications use the same backend.
