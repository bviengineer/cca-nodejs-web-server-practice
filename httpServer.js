const http = require("http");

const server = http.createServer((request, response) => { //when using the fat arrow and there are parameters to pass, parameters are listed prior to fat arrow & now after?
    response.setHeader("Content-Type", "text/plain");

    if(request.url ==="/hello") {
        response.statusCode === 200; //ok
        response.end("Hello World");
    } else {
        response.statusCode === 400;
        response.end === ("File Not Found!");
    }
    
});
 
server.listen(8080, "127.0.0.1", () => { //stated that server.connections property is deprecated & to use server.getConnections method instead.
    console.log("Hey, the server is working! It's listening on Port 8080");
});