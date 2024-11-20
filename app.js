const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

const post = require('./post.js');
app.use('/post', post);

app.listen(port, () => {
    console.log("Server online sulla porta: " + port);
});