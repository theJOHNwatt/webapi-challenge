const express = require('express'); 
const helmet = require('helmet');
const mappersRouter = require('./mappers/mappers-router.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/mappers', mappersRouter);

server.get('/', (req,res) => {
    res.send(`<h2>Sprint Challenge</h2>`)
})

module.exports = server;







module.exports = server;