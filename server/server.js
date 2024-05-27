const express = require('express');
const next = require('next');
// const routes = require('./routes');
const userRouter = require('./routes/user');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();




nextApp.prepare().then(() => {
    const server = express();

    server.set('view engine', 'ejs');

    server.use('/user', userRouter);


    server.get('/ejstest', (req, res) => {
        res.render('test', { name: 'Express' });
    });
    
    server.get('/te', (req, res) => {
        res.download('server/server.js');
        // res.send('Hello World');

    });

    // Define your API routes or any other server logic here

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
