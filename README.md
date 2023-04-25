# Fundamentos do Node.js e back end

## HTTP Methods (GET, POST, PUT, PATCH, DELETE)

- **GET**: Buscar uma recurso do back end
- **POST**: Criar uma recurso no back end
- **PUT**: Atualizar um recurso no back end
- **PATCH**: Atualizar uma informação específica de um recurso no back end
- **DELETE**: Deletar um recurso do back end

## Stateful vs Stateless

**Stateful**: Sempre terá algo sendo salvo em memória. A aplicação depende de informações que são salvas em memória para que ela continue funcionando da mesma forma, caso o contrário ela passará a ter outro comportamento. Não se deve usar uma aplicação stateful em produção, pois não podemos depender dos dados salvos em memória.

**Stateless**: Não salva nada na memória, apenas em dispositivos externos (database, arquivos de texto, etc). Tendo as informações salvas em memória ou não, a aplicação continuará funcionando da mesma forma.

## O que é JSON (JavaScript Object Notation)?

Estrutura de dados muito utilizada na transição de informações entre back end e front end ou entre 2 back ends distintos. Se assemelha a como as estruturas de dados são no JavaScript, permitindo representar objetos, arrays, tipos de dados primitivos (string, boolean, int, etc.) tudo isso, dentro de uma string, facilitando a transição de dados de diferentes tipos entre diversas aplicações.

## O que são HEADERS (request/response)

São metadados, ou seja, são informações adicionais para que tanto o back end quanto o front end saibam como lidar com aquela requisição da melhor forma e que não tem relação com os dados retornados, mas sim com a forma como esses dados vindos do back end poderão ser interpretados pelo front end.

## HTTP Status Code

Após o cliente fazer uma requisição para alguma rota da aplicação o back end retorna um código numérico que informa ao front end se a mesma foi bem sucedida, bem como informa possíveis erros, como página não encontrada ou erro interno do servidor.

Os tipos de código HTTP são:
- 1xx: respostas informativas
- 2xx: respostas de sucesso
- 3xx: mensagens de redirecionamento
- 4xx: respostas de erro do cliente
- 5xx: respostas de erro do servidor


## Streams

O conceito de streams no Node.js é o de que devemos usar a informação (dados) conforme ela é lida ao invés de esperar a leitura completa. Por exemplo: ao invés de ler um arquivo CSV de 1GB por completo e só então salvar as informações no banco de dados, nós podemos salvar as informações conforme o arquivo é lido, ou seja, ao invés de esperar que as 1 milhão de linhas (valor fictício) sejam lidas para só então salvar no banco, nós salvamos os dados assim que as linhas forem lidas (se tivermos mil linhas sendo lidas por segundos essa será a quantidade de informações a serem salvas no banco por segundo).

Também é importante lembrar que existem 2 tipos de streams, **readable streams** e **writable streams**. As readable streams são aquelas em que lemos os dados que estão sendo recebidos aos poucos, como é o exemplo da leitura de arquivo dado acima, enquanto as writable streams são aquelas em que enviamos os dados aos poucos, como por exemplo a Netflix e Spotify, que vão enviado os filmes e músicas para os usuários aos poucos.
