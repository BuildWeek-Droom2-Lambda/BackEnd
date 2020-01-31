# Node Server for Droom
-----------------------------------------
*LinkedIn Meets Tinder for matching job seekers with thier dream jobs.*

> **Find Your _Droom_ Job**
-----------------------------------------

# **API**

**_Keep in mind the heroku server goes to sleep after 30 mins of activity, so if it lags, it may be the first time it's being accessed in a while. Give it a minute to boot up and try again_**

*baseUrl:*  `https://droom-node-server.herokuapp.com/api`

> ## Jobs

  - ### **GET** `/jobs`
    - Returns an array of all the jobs in the database.
  
  - ### **GET** `/jobs/:id`
    - The id should be in the request paramaters
    - Returns the id, name, location, description, and company_id of the job by id

  - ### **POST** `/jobs`
    - *PROTECTED*
    - Returns id and name of new job
    - Your request body must include a name, location, description, and the company_id of the company making the post
    - Salary is optional

  - ### **PUT** `/jobs/:id`
    - *PROTECTED*
    - Returns id and name of updated job
    - Your request body must include the name, location, description, and the company_id of the job to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/jobs/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.

--------
> ## Companies

  - ### **GET** `/companies`
    - Returns an array of all the companies in the database.
  
  - ### **GET** `/companies/:id`
    - The id should be in the request paramaters
    - Returns the id, name, location, and bio of the company by id

  - ### **POST** `/companies` ( use when registering a new company account )
    - Returns id and name of new company
    - Your request body must include a name, password, location, and bio of the company

  - ### **PUT** `/companies/:id`
    - *PROTECTED*
    - Returns id and name of updated company
    - Your request body must include the name, location, and bio of the company to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/companies/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.

--------

> ## Seekers

  - ### **GET** `/seekers`
    - Returns an array of all the seekers in the database.
  
  - ### **GET** `/seekers/:id`
    - The id should be in the request paramaters
    - Returns the id, username, location, skills, and experience of the seeker by id

  - ### **POST** `/seekers` ( use when registering a new seeker account )
    - Returns id and name of new seeker
    - Your request body must include a username, password, location, skills, and experience of the new seeker to be posted

  - ### **PUT** `/seekers/:id`
    - *PROTECTED*
    - Returns id and name of updated seeker
    - Your request body must include the username, location, skills, and experience of the seeker to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/seekers/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.