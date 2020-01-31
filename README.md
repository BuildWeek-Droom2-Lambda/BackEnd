# Node Server for Droom

-----------------------------------------

## **API**

*baseUrl:*  `https://droom-node-server.herokuapp.com/api`

### Jobs

  - ###### GET /jobs
    - Returns an array of all the jobs in the database.
  
  - ###### GET /jobs/:id
    - The id should be in the request paramaters
    - Returns the id, name, location, description, and company_id of the job by id

  - ###### POST /jobs
    - **PROTECTED**
    - Returns id and name of new job
    - Your request body must include a name, location, description, and the company_id of the company making the post

  - ###### PUT /jobs/:id
    - **PROTECTED**
    - Returns id and name of updated job
    - Your request body must include the name, location, description, and the company_id of the company making the post
    - The id should be in the request paramaters

  - ###### DELETE /jobs/:id
    - **PROTECTED**
    - The id should be in the request paramaters
    - Returns a 1 if successful, indicating the number of deleted records.

### Companies




### Seekers