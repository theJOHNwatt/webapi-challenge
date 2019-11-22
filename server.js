const express = require('express'); 
const helmet = require('helmet');
const projectsRouter = require('./mappers/projects-router.js');
const actionsRouter = require('./mappers/actions-router.js')
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/mappers/projects', projectsRouter);
server.use('/mappers/actions', actionsRouter);

server.get('/', (req,res) => {
    res.send(`<h2>Sprint Challenge</h2>`)
})



module.exports = server;







