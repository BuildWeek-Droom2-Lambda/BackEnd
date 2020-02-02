# Node Server for Droom
-----------------------------------------
*LinkedIn Meets Tinder for matching job seekers with thier dream jobs.*

> **Find Your _Droom_ Job**
-----------------------------------------

# **API**

**_Keep in mind the heroku server goes to sleep after 30 mins of activity, so if it lags, it may be the first time it's being accessed in a while. Give it a minute to boot up and try again_**

*baseUrl:*  `https://droom-node-server.herokuapp.com/api`

> ## Auth
  - ### **POST** `/register`
    - Returns the newly created user object.
    - Your request body must include a name, password and user type (which can only be "seeker" or "company") of the user.

  - ### **POST** `/login`
    - Returns the user (if found and valid) along with a JSON Web token.
    - Your request body must include the name, password, and user type (which can only be "seeker" or "company") of the user.

> ## Jobs

  - ### **GET** `/jobs`
    - Returns an array of all the jobs in the database.
  
  - ### **GET** `/jobs/:id`
    - The id should be in the request parameters
    - Returns the id, name, location, description, and company_id of the job by id

  - ### **POST** `/jobs`
    - *PROTECTED*
    - Returns the new job object
    - Your request body must include a name, location, description, and the company_id of the company making the post
    - Salary is optional

  - ### **PUT** `/jobs/:id`
    - *PROTECTED*
    - Returns the updated job object
    - Your request body must include the name, location, description, and the company_id of the job to be updated
    - The id should be in the request parameters
    - Salary is optional

  - ### **DELETE** `/jobs/:id`
    - *PROTECTED*
    - The id should be in the request parameters
    - Returns a 1 if successful, indicating the number of deleted records.

--------
> ## Companies

  - ### **GET** `/companies`
    - Returns an array of all the companies in the database.
  
  - ### **GET** `/companies/:id`
    - The id should be in the request parameters
    - Returns the id, name, location, and bio of the company by id

  - ### **PUT** `/companies/:id`
    - *PROTECTED*
    - Returns id and name of updated company
    - Your request body must include the name, location, and bio of the company to be updated
    - The id should be in the request parameters

  - ### **DELETE** `/companies/:id`
    - *PROTECTED*
    - The id should be in the request parameters
    - Returns a 1 if successful, indicating the number of deleted records.

--------

> ## Seekers

  - ### **GET** `/seekers`
    - Returns an array of all the seekers in the database.
  
  - ### **GET** `/seekers/:id`
    - The id should be in the request parameters
    - Returns the seeker object

  - ### **PUT** `/seekers/:id`
    - *PROTECTED*
    - Returns the updated seeker object
    - Your request body must include the username, location, skills, and experience of the seeker to be updated
    - The id should be in the request parameters

  - ### **DELETE** `/seekers/:id`
    - *PROTECTED*
    - The id should be in the request parameters
    - Returns a 1 if successful, indicating the number of deleted records.