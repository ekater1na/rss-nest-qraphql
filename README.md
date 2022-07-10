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

- Add generated JWT TOKEN to HTTP Header in GraphQL Playground. Just copy and paste:

```bash
# HTTP Header example (replace <TOKEN> with your generated token)
{"authorization": "Bearer <TOKEN>"
}
```

[Example here](https://ibb.co/kXGwn2L)

---

- Add query:

<details>
 <summary>Album queries examples</summary>

```bash
# albums query example
query {
  albums (limit: 10, offset: 0){
    name
    released
    artists {
      firstName
      secondName
    }
    bands {
      name
      genres {
        name
      }
    }
    genres {
      name
      country
    }    
    image
  }
}
```

```bash
# artist query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query {
  album (id: "<ID>"){
    name
    released
    artists {
      firstName
      secondName
    }
    bands {
      name
      genres {
        name
      }
    }
    genres {
      name
      country
    }    
    image
  }
}
```

</details>

<details>
 <summary>Artist queries examples</summary>

```bash
# artists query example
query{
  artists (limit: 10, offset: 0){
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

</details>

<details>
 <summary>Band queries examples</summary>

```bash
# bands query example
query{
  bands(limit: 10, offset: 0) {
    id
    name
    origin
    website
    genres {
      name
      country
      description
    }
  }
}
```

```bash
# band query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query{
  band(id: "<ID>") {
    name
    origin
    website
    genres {
      name
      country
      description
    }
  }
}
```

</details>

<details>
 <summary>Favourites querie examples</summary>

```bash
# genres query example
query {
  favourites {
    bands {
      name
    }
    artists {
      firstName
      secondName
      country
    }
    genres {
      name
      country
    }   
  }
}
```

</details>

<details>
 <summary>Genre queries examples</summary>

```bash
# genres query example
query {
  genres (limit: 10, offset: 0) {
    name
    description
    country
    year
  }
}
```

```bash
# genre query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query {
  genre (id: "<ID>") {
    name
    description
    country
    year
  }
}
```

</details>

<details>
 <summary>Track queries examples</summary>

```bash
# tracks query example
query {
 tracks (limit: 10, offset: 0){
  title
  album {
    name
  }
  artists {
    firstName
    secondName
  }
  bands {
    name
  }
  duration
  released
  genres {
    name
  }
 }
}
```

```bash
# track query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query {
 track (id:"<ID>") {
  title
  album {
    name
  }
  artists {
    firstName
    secondName
  }
  bands {
    name
  }
  duration
  released
  genres {
    name
  }
 }
}
```

</details>

<details>
 <summary>User and JWT queries examples</summary>

```bash
# user query example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
query{
  user(id: "<ID>") {
    email
    firstName
    secondName
    password
  }
}
```

```bash
# jwt query example (replace <email> with your id, f.e. user@gmail.com, <password> with your id, f.e. Password123)
query{
 jwt(email: "<email>", password: "<password>") {
    jwt
  }
}
```

</details>

---

- Add mutation:

<details>
 <summary>Albums mutations examples</summary>

```bash
# createAlbum mutation example
mutation {
 createAlbum(createAlbumInput: { name: "Awesome album", released: 2022 }) {
  name
  released
  artists {
    firstName
  }
  bands {
    name
  }
  genres {
    name
    country
  }
  image
 }
}
```

```bash
# updateAlbum mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 updateAlbum(updateAlbumInput: { id: "<ID>", name: "Awesome album", released: 2022 }) {
  name
  released
  artists {
    firstName
  }
  bands {
    name
  }
  genres {
    name
    country
  }
  image
 }
}
```

```bash
# deleteAlbum mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 deleteAlbum(id: "62cac076db499a6a997e6404") {
  name
 }
}
```

</details>

<details>
<summary>Artists mutations examples</summary>

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

</details>

<details>
 <summary>Bands mutations examples</summary>

```bash
# createBand mutation example
mutation {
 createBand(createBandInput: {
  name: "Thirty Seconds to Mars",
  members: { instrument: "Guitar"}
}) {
  name
  origin
  website
  members {
    instrument
  }
 }
}
```

```bash
# updateBand mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 updateBand(updateBandInput: {
  id: "<ID>",
  name: "Maroon 5",
  website: "maroon5.com"
}) {
  name
  origin
  website
 }
}
```

```bash
# deleteBand mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 deleteBand(
  id: "<ID>",
  ) {
  name
 }
}
```

</details>

<details>
 <summary>Favourites mutations examples</summary>

```bash
# addTrackToFavourites mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
  addTrackToFavourites(id: "<ID>") {
    tracks {
      title
    }
  }
}
```

```bash
# addBandToFavourites mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
  addBandToFavourites(id: "<ID") {
   bands {
   name
   website
   }
  }
}
```

```bash
# addArtistToFavourites mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
  addArtistToFavourites(id: "<ID>") {
    artists {
      firstName
      secondName
      country
    }
  }
}
```

```bash
# addGenreToFavourites mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
  addGenreToFavourites(id: "<ID>") {
    genres {
      name
      country
      description
    }
  }
}
```

</details>

<details>
 <summary>Genres mutations examples</summary>

```bash
# createGenre mutation example
mutation {
 createGenre(createGenreInput: {
  name: "Soul",
  year: 1950}) {
  name
  description
  year
  country
 }
}
```

```bash
# updateGenre mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation{
 updateGenre(updateGenreInput: {
  id: "<ID>",
  name: "Updated genre"
}) {
  name
  description
  year
  country
 }
}
```

```bash
# deleteGenre mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation{
  deleteGenre(id: "<ID>") {
    name
  }
}
```

</details>

<details>
 <summary>Tracks mutations examples</summary>

```bash
# createTrack mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
  createTrack(createTrackInput: {
    title: "The Show Must Go On"
    artistsIds: "<artist ID>"
    bandsIds: "<band ID>"
    duration: 267
    released: 1991
    genresIds: "<genre ID>"

  }) {
    title
    artists {
      firstName
      secondName
    }
    bands {
      name
      website
    }
    duration
    released
  }
}
```

```bash
# updateTrack mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 updateTrack(updateTrackInput: {
  id: "<ID>"
  title: "I love you baby"
}) {
  title
  duration
}
}
```

```bash
# deleteTrack mutation example (replace <ID> with your id, f.e. 62caa13e07f87f02470888b4)
mutation {
 deleteTrack(
  id: "62caa83f3685c31a02bc8030"
  ) {
  title
 }
}
```

</details>

<details>
 <summary>User mutations examples</summary>

```bash
# registerUser mutation example
mutation {
  registerUser(registerUserInput: {
    firstName: "Elon"
    lastName: "Musk"
    email: "example@gmail.com"
    password: "Password123"
  }){
   firstName
   secondName
   password
   email
  }
}
```

</details>

---
