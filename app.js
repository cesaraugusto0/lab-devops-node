// app.js
const http = require('http');
const port = process.env.PORT || 80;

const requestHandler = (request, response) => {
  response.end('<h1>Bem-vindo ao AWS CodePipeline com Node.js! VERSÃO NOVAAAAAAA!!!!!</h1>');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
