# Adventure Awaits 
  List out your adventures! Adventure Awaits is an app where you can easily organize your future adventures. 
----
## Test User Login: email@email.com | password
---- 
## Team Members
[Brandon](https://github.com/Brandon205) - Git master  
[Abdi](https://github.com/Abdi208) - Web Developer   
[Ari](https://github.com/AriG150) - Web Developer       
 
## Requirements
1. Build a full-stack application making your own backend and frontend   
2. Have an interactive front-end   
3. Use a database  
4. Implement throughout user stories   
5. Be deployed online  
 
## Installation Instructions 
* Fork and clone this repository:   
* Run `npm install` to install dependencies in both client and main project folder
  * Use `nodemon` to run the application in the main project folder
* Create .env file, which will need to include: 
  * `PORT=3001`
  * `JWT_SECRET` (you determine this for user token creation)
  * `MONGODB_URL=mongodb://localhost/project`
* View in browser 
 
## Technologies Used 
  - MongoDB/Mongoose    
  - Experess.js    
  - React      
    - Key Modules:    
      - Axios  
      - React-router-dom  
      - React-Materialize  
  - Node.js    
 
## User Stories 
- As a user I want to...  
  - Have an account and signup, login, logout  
  - Create a new adventure     
    - Edit the adventure, add details and photos about the adventure  
    - Check that the adventure has been completed  
 
## Development Sprints and Process 
  ### Sprint 1 
  Our first sprint all about planning out app in detail. We spend the day thinking about the user story, planning models and how they would relate to one another, wireframing, and our backend routes. We spent some time discussing the distribution of responsibilities and Brandon volunteered to be our Git Master for the project. 
  ![UserStoryImage](/client/src/img/UserStory.jpeg)
 
  
  ### Sprint 2 
  We spent an entire work day completing our back end routes and models. Originally we did not include Mongoose's .id that is used with embedded elements in order to utilize a 'findById' so our routes all included many for loops, but we were able to simplify them after learning about the tool above. We verified our routes work via Postman and ended the day on a high note. 
 
  ### Sprint 3 
  Our next sprint surrounded React and creating our front end components. We spent the rest of our time incorporating the back end to our front end, integrating the React-Materialize module and styling our site. 
 
 
 
## Routes and Models 
| CRUD | ROUTE | Function |
| ---- | ----- | -------- |
| GET  | /auth/signup | Renders signup page | 
| POST | /auth/signup | Creates a new user in the database | 
| GET | /auth/login | Renders login page | 
| POST | /auth/login | Signs in existing user | 
| GET | /auth/logout | Logout user | 
| GET | /usercategories | Shows all categories with line items | 
| GET | /categories | getting all categories for dropdown |

    




