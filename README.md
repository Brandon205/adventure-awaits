# Adventure Awaits 
  List out your adventures! Adventure Awaits is an app where you can easily organize your future adventures. 

## Test User Login: email@email.com | password

## Team Members
Brandon - Git master  
Ari - Developer     
Abdi - Developer 

## Requirements
Build a full-stack application making your own backend and frontend   
Have an interactive front-end   
Use a database  
Imlement throughtful user stories   
Be deployed online  

## Installation Instructions 

## Technologies Used 
  -MongoDB/Mongoose
  -Experss.js
  -React
  -Node.js

## User Stories 
-As a user I want to...  
  -Have an account and signup, login, logout
  -Create a new adventure   
    -Edit the adventure, add details and photos about the adventure
    -Check that the adventure has been completed

## Development Sprints and Process 

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





