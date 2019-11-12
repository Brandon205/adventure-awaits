# Adventure Awaits 
  List out your adventures! Adventure Awaits is an app where you can easily organize your future adventures. 

## Test User Login: email@email.com | password

## Team Members
[Brandon](https://github.com/Brandon205) - Git master  
[Abdi] (https://github.com/Abdi208) - Web Developer 
[Ari] (https://github.com/AriG150) - Web Developer     

## Requirements
Build a full-stack application making your own backend and frontend   
Have an interactive front-end   
Use a database  
Imlement throughtful user stories   
Be deployed online  

## Installation Instructions 

## Technologies Used 
  -MongoDB/Mongoose
  -Experess.js
  -React
  -Node.js

## User Stories 
-As a user I want to...  
  -Have an account and signup, login, logout
  -Create a new adventure   
    -Edit the adventure, add details and photos about the adventure
    -Check that the adventure has been completed

## Development Sprints and Process 
  ### Sprint 1 
    Our first sprint all about planning out app in detai. We spend the day thinking about the user story, planning the models and how they would relate to one another, wireframing, and our backend routes. We spent some time discussing the distribution of responsibities and Brandon volunteered to be our Git Master for the project. 
  
  ### Sprint 2 
    We spent an entire work day completing our back end routes and models. Originally we did not include Mongoose's .id that is used with embedded elements in order to utilize a 'findById' so our routes all included many for loops, but we were able to simplify them after learning about the tool above. We verified our routes work via Postman and ended the day on a high note. 

  ### Sprint 3 
    Our next spring surrounded React and creating our front end components. We spent 2.5 days incorporating the back end to our front end, and editing our basic UX. 

  ## Sprint 4 

## Routes and Models 
| CRUD | ROUTE | Function |
| ---- | ----- | -------- |
| GET  | /auth/signup | Renders signup page | 
| POST | /auth/signup | Creates a new user in the database | 
| GET | /auth/login | Renders login page | 
| POST | /auth/login | Signs in existing user | 
| GET | /auth/logout | Logout user | 
| GET | /usercategoreis | Shows all categories with line items | 
| GET | /categories | getting all categoreis for dropdown |
| GET | /listitems/:cName | Shows all list itmes for their category |
| POST | /categories | All categories for the user  |
| GET | /listitems/:id | Shows all listitems for that category |
| PUT | /listitems/:id | Updating listitems detail | 



| MODEL | SCHEMA | NOTES | 
| ----- | ------ | ------------ |
| User | name, email, password, listitems | listitems is embedded within user | 
| ListItem | name, description, photo, categories |  categories is a reference | 
| Category | name | 


## Things to Note and Changes for the Future:
  Some goals for the future:
    -Linking users who have similar categories. Perhaps with the end goal of having people be able to interact depending on their interests
    -Have users add a date by which they want to finish their adventure and have a notification that the date is a certain amoutn of time away (ex: You wanted to 'Climb Matchu Pitchu' in 2 months!) 




