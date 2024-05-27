const express = require('express');
const next = require('next');
// const routes = require('./routes');
const userRouter = require('./routes/user');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
import style from 'styled-jsx/style'
const server = express();

nextApp.prepare().then(() => {

    // server.set('view engine', 'ejs');

    server.use('/api/user', userRouter);

    server.get('/test', (req, res) => {
        res.send('Hello World test');
    });

    // server.get('/ejstest', (req, res) => {
        // res.render('test', { name: 'Express' });
    // });
    
    server.get('/te', (req, res) => {
        res.download('server/server.js');
        // res.send('Hello World');

    });

         // Example of an API route
    server.get('/api/hello', (req, res) => {
        res.json({ message: 'Hello from Express!' });
    });
    // Define your API routes or any other server logic here

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    // server.listen(3000, (err) => {
    //     if (err) throw err;
    //     console.log('> Ready on http://localhost:3000');
    // });
});

module.exports = server
