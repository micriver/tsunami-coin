const express = require("express");

const app = express();

// when we deploy, the server most likely won't run at 5000 so we wnat the server to look at the port number in an environment variable, if thats not available, its just going to run at 5000.

const PORT = process.env.PORT || 5000;
// this has a bunch of properties and methods, one of which is called listen which we use to run the webserver and listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/*

run the command: "node server" to start the server
"Cannot GET /" means it cannot get a route handle/endpoint for the "/"

When you want to go to a webpage, that's a GET request

*/
