import express from "express";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hi');
});

// get a list of jokes 
app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'a joke one',
            content: "this is joke one"
        },
        {
            id: 2,
            title: 'a joke two',
            content: "this is joke two"
        },
        {
            id: 3,
            title: 'a joke thrid',
            content: "this is joke third"
        },
    ];


    res.send(jokes)



})

app.listen(port, () => {
    console.log('listening on the port ', port)
});