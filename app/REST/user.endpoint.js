class user{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
var userArray = [];

const userEndpoint = (router) => {

    
   router.post('/api/user', async (request, response, next) => {
    try{
    console.log("dziala");
    userArray.push(new user(request.body.name, request.body.email, request.body.password))
    response.status(200).send(request.body);
    }catch(error){
     console.log('nie dziala');
   }});


   router.get('/api/users', async (request,response, next) => {
       try {
           response.status(200).send(userArray);
       } catch (error) {
        console.log('nie dziala');
       }
   });

   router.get('/api/user/:id', async (request,response, next) => {
    try {
        response.status(200).send(userArray[request.params.id]);
    } catch (error) {
     console.log('nie dziala');
    }

});

};

export default userEndpoint;

