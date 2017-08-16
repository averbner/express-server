const express = require('express');
const morgan = require('morgan');
const app = express();
var port = 3000;

//middlewares

// app.use((req,res,next) => {
//     console.log('Request URL: ' + req.url);
//     next();
// });

app.use(morgan('combined'));

//routes
app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.get('/login', (req, res) => {
    res.end('Login!');
});

app.get('*', (req, res) => {
    res.end('Not Found!');
});

app.listen(port, () => {
    console.log('Server start on port ' + port);
});