const express = require('express');
const db = require('./queries')
const app = express();
const port = process.env.PORT || 5000;

// app.use();
app.get('/', (request, response) => {
    //response.json({ info: 'Node.js, Express, and Postgres API WORKING!' })
    request.send("WORKING!");
});

app.get('/users', db.getUsers);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
