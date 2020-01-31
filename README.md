# Node Server for Droom
-----------------------------------------
*LinkedIn Meets Tinder for matching job seekers with thier dream jobs.*

> **Find Your _Droom_ Job**
-----------------------------------------

# **API**

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

  - ### **PUT** `/jobs/:id`
    - *PROTECTED*
    - Returns id and name of updated job
    - Your request body must include the name, location, description, and the company_id of the job to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/jobs/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.

> ## Companies

  - ### **GET** `/companies`
    - Returns an array of all the companies in the database.
  
  - ### **GET** `/companies/:id`
    - The id should be in the request paramaters
    - Returns the id, name, location, and bio of the company by id

```
--- UNDER REVIEW ---

  - ### **POST** `/companies`
    - *PROTECTED*
    - Returns id and name of new company
    - Your request body must include a name, location, and bio of the company
```

  - ### **PUT** `/companies/:id`
    - *PROTECTED*
    - Returns id and name of updated company
    - Your request body must include the name, location, and bio of the company to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/companies/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.



> ## Seekers

  - ### **GET** `/seekers`
    - Returns an array of all the seekers in the database.
  
  - ### **GET** `/seekers/:id`
    - The id should be in the request paramaters
    - Returns the id, username, location, skills, and experience of the seeker by id

```
--- MAY MOVE TO AUTH ROUTER ---
--- MAYBE THEY DONT NEED TO KNOW HOW THE BACKEND IS SET UP, JUST HOW TO CONNECT TO IT ---

  - ### **POST** `/seekers`
    - Returns id and name of new seeker
    - Your request body must include a username, location, skills, and experience of the new seeker to be posted
```

  - ### **PUT** `/seekers/:id`
    - *PROTECTED*
    - Returns id and name of updated seeker
    - Your request body must include the username, location, skills, and experience of the seeker to be updated
    - The id should be in the request paramaters

  - ### **DELETE** `/seekers/:id`
    - *PROTECTED*
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.