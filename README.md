# TODO-NodeJS-API
....................................................
A TODO LIST BACKEND with JWT authentification
...................................................
Run Code : 
  1) change the DB_CONNECT 
  2) yarn install 
  3) yarn start
..................................................
Test apis with postman : 
  1) register : POST http://localhost:3000/register/ 
                body : 
                {
                     "name" : "mortadha",
                     "email" : "mortadha@gmail.com",
                     "password" : "mortadha"
                }
  2) login : POST http://localhost:3000/login/ 
                body : 
                {
                     "email" : "mortadha@gmail.com",
                     "password" : "mortadha"
                }
  3) tasks : GET http://localhost:3000/api/tasks 
.....................................................
Test Code with tdd : 
    1) npm test
