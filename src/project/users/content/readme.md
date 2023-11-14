# .
 ____________________________
|                            |
|                            |
|           USERS            |
|                            |
|____________________________|

@model: 

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "jhonDoe@gmail.com" ,
  "password": "john1234",
  "country": "United States" ,
  "image": "https://randomuser.me/api/portraits/men/49.jpg" ,
  "isVerified": false,
  "frontBaseUrl":"https://flights-front-bolpiwpg8-jandres373.vercel.app/"
}

@ Api endpoints: 

/users 
  .get
  .post

/users/me
  .get

/users/verify/:code
  .get

/users/:id
  .get
  .put
  .delete
