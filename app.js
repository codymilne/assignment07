'use strict';

const express = require('express');
const app = express();
/*
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
  });
  
*/
// define endpoint for exercise 1 here
app.get('/math/circle/:r', function (req, res) {
    let radius = req.params['r'];
    res.type('text');
    //res.send('The radius is ' + radius);
    let area = radius * radius * Math.PI;
    let circumference = 2 * radius * Math.PI;
    res.json({"area": area, "circumference": circumference})
});
// define endpoint for exercise 2 here
app.get('/hello/name',function (req, res) {
    //let firstName = req.params['first'];
    //let lastName = req.params['last'];

    let firstName = req.query['first'];
    let lastName = req.query['last'];

    if (!req.query['first'] && !req.query['last'] ){
        res.type('text').status(400).send('Missing Required GET parameters: first, last');
        //res.send('bothname');
    }
    else if (!req.query['last']){
        res.type('text').status(400).send('Missing Required GET parameters: last');
        //res.send('lname');
    }
    else if 
    (!req.query['first']){
        res.type('text').status(400).send('Missing Required GET parameters: first');
        //res.send('fname');
    }
    else{
        res.send('Hello ' + firstName + ' ' + lastName);
    }

    
});


const PORT = process.env.PORT || 8000;
app.listen(PORT);