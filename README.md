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

## O que é JSON

**JSON (JavaScript Object Notation)**: Estrutura de dados muito utilizada na transição de informações entre back end e front end ou entre 2 back ends distintos. Se assemelha a como as estruturas de dados são no JavaScript, permitindo representar objetos, arrays, tipos de dados primitivos (string, boolean, int, etc.) tudo isso, dentro de uma string, facilitando a transição de dados de diferentes tipos entre diversas aplicações.

## O que são HEADERS

**HEADERS (request/response)**: São metadados, ou seja, são informações adicionais para que tanto o back end quanto o front end saibam como lidar com aquela requisição da melhor forma e que não tem relação com os dados retornados, mas sim com a forma como esses dados vindos do back end poderão ser interpretados pelo front end.
