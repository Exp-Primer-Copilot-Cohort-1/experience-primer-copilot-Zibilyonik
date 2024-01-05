// Create web server

// 1. Import Express
const express = require('express');

// 2. Create web server
const app = express();

// 3. Create route
app.get('/', function(req, res) {
    res.send('Hello World');
});

// 4. Listen for request
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});