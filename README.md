<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


[GraphQL + Nest](https://docs.nestjs.com/graphql/quick-start) app with schema-first approach
## Preparations

- Run [microservices](https://github.com/rolling-scopes-school/node-graphql-service)

- Run your database

```bash
# clone repo
$ git clone https://github.com/ekater1na/rss-nest-qraphql.git
```
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Playground

GraphQL Playground will be available here: [http://localhost:4000/graphql](http://localhost:4000/graphql).


## Workflow

- Create JWT token


```bash
# jwt query example
query{
 jwt(email: "met9129@gmail.com", password: "118649qwe") {
    jwt
  }
}
```
- Add generated JWT TOKEN to HTTP Header in GraphQL Playground: 

```bash
# HTTP Header example (replace <TOKEN> with your generated token)
{"authorization": "Bearer <TOKEN>"
}
```
- Add query: 

```bash
# artists query example
query{
  artists {
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      name
      origin      
    }
    instruments
  }
}
```

```bash
# artist query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query{
  artist(id: "<ID>") {
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      name
      origin      
    }
    instruments
  }
}
```

- Add mutation: 

```bash
# createArtist mutation example
mutation{
  createArtist(createArtistInput: {firstName: "Bruno", secondName:"Mars", country: "Honolulu, Hawaii, U.S."}) {
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      name
      origin      
    }
    instruments
  }  
}
```

```bash
# updateArtist mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation{
  updateArtist(updateArtistInput: {id: "<ID>", country: "USA" , birthPlace: "Honolulu, Hawaii, U.S.", birthDate: "10/08/1985"}) {
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    bands {
      name
      origin      
    }
    instruments
  }  
}
```

```bash
# deleteArtist mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation{
  deleteArtist(id: "<ID>") {
    firstName
    secondName
  }
}
```
