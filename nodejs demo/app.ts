import express from 'express';

const server = express();


server.get('/', ((req,res)=>{
    console.log(req.url);
    res.writeHead(200);
    res.end('Hello from express server');
}));

server.listen(3000, ()=>{
    console.log('server listening to 3000')
});