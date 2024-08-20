//import json server
const jsonServer = require('json-server');

//ceate server using creating() method
const mediaPlayerServer=jsonServer.create()

//create path/route to db.jsonfile
const router=jsonServer.router('db.json')

//create a middle ware used to convert JSON data to JS Object
const middleware=jsonServer.defaults();

//add middleware and router to middleplayerserver
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

const PORT = 4000;
//Run the middleware server

mediaPlayerServer.listen(PORT,()=>{
    console.log(`media player server running on PORT ${PORT}`);
})

