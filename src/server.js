import http from 'node:http'

/*
  HTTP Methods => GET, POST, PUT, PATCH, DELETE

  GET => Buscar uma recurso do back end

  POST => Criar uma recurso no back end

  PUT => Atualizar um recurso no back end

  PATCH => Atualizar uma informação específica de um recurso no back end

  DELETE => Deletar um recurso do back end
*/

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    // Early return
    return res.end('Listagem de usuários.')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuários.')
  }

  return res.end('Hello Ignite!')
})

// localhost:3333
server.listen(3333)
