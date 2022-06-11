import { createServer } from "http";

// const requestListener = function (

const server = createServer((req, res) =>{
	res.writeHead(200);
	res.end('Hello, World!');
});
server.listen(8080);