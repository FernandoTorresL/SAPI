# REST API Project 'Subdelegaciones IMSS' (SAPI)

<a href="https://github.com/FernandoTorresL/SAPI/commits/main" target="_blank">![GitHub last commit](https://img.shields.io/github/last-commit/FernandoTorresL/SAPI)</a>

<a href="https://github.com/FernandoTorresL/SAPI" target="_blank">![GitHub repo size](https://img.shields.io/github/repo-size/FernandoTorresL/SAPI)</a>
## Project for IMSS, México. (Projecto personal para IMSS, México)

Full Node.js demo REST API for 'Subdelegaciones IMSS'. New exercise based on "Let's Build a Node.js REST API" blog serie from Victoria Lo and the exercise on freeCodeCamp site from Nishant Kumar (links below).

## Table of contents 👀
* [Introduction](#introduction)
* [Technologies](#technology-used)
* [Tools](#tools)
* [Installation](#installation)
* [Start server](#start-server)
* [Test routes](#test-routes)



## Introduction

This project will be operated by workers of the _Coordinación de Afiliación - División de Soporte a los Procesos de Afiliación_, an office on Instituto Mexicano del Seguro Social (IMSS, DIR, CA, DSPA) from Ciudad de México, México.

This project must build a RESTful API using Node, Express and MongoDB with the help of this awesome tutorial series [Let's Build a Node.js REST API](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42) made by [Victoria Lo](https://lo-victoria.com/)

[Victoria Lo's Github repo](https://github.com/victoria-lo/TAPI)

Also, we build this project with the help of this page [How to build a RESTful API using Node, Express and MongoDB](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/) made by [Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)

[Nishant Kumar's Github repo](https://github.com/nishant-666/Rest-Api-Express-MongoDB)

With this API, users can get general info about all the 'Subdelegaciones IMSS' from México. Subdelegaciones are the customer's office for a variety of formalities ono social security.

## Technology used

This project was build with the use of:

- Javascript
- MongoDB
- Express
- Node

## Tools

- Postman
- Visual Studio Code

## Installation

### Clone repo

```sh
git clone git@github.com:FernandoTorresL/SAPI.git
```

> Optional: You can change *<my_folder>* on this instruction to create a new folder


```sh
git clone git@github.com:FernandoTorresL/SAPI.git <my_folder> 
```

### Create/Copy initial files (only .env.example on GitHub)

Create your own .env file based on .env.example file on main folder with connection string to MongoDB and optional Port number.

Replace the values:
- *<your_user>*, This is the database user defined on MongoDB
- *<your_password>*, the password defined for your user
- *<name_cluster_mongodb>*, the name of the Cluster on MongoDB
- *<collection_name>*, the name of the Collection
- *<port_number>*, the port number to use

Confirm values on your MongoDB Database and Cluster page

```sh
DATABASE_URL=mongodb+srv://<your_user>:<your_password>@<name_cluster_mongodb>/<collection_name>?retryWrites=true&w=majority

PORT=<port_number>
```

For example:

```txt
DATABASE_URL=mongodb+srv://fertorresmx:12345678@cluster1.ABC.mongodb.net/Subdelegaciones?retryWrites=true&w=majority

PORT=3000
```

### Change to working directory and install dependencies

```sh
$ cd SAPI
$ npm install
$
```

### Start server

```sh
$ npm start
$
$
```

Example output

```sh
$ > sapi@1.0.0 start
$ > nodemon index.js
$
$ [nodemon] 3.0.1
$ [nodemon] to restart at any time, enter `rs`
$ [nodemon] watching path(s): *.*
$ [nodemon] watching extensions: js,mjs,cjs,json
$ [nodemon] starting `node index.js`
$ App started and listening on port 3000
$ Database connected!
```

> This prompt may vary if you use another shell configuration or operating system, like pk10, git bash, WSL, Linux...

## Test routes

Now, after check that *"Database connected!"* message is on your terminal, you can test your routes using tools like Postman.

### Test */getAll* method

For example, to test this method use this values on Postman (check image below):
- Method: GET
- URL: localhost:<port_number>/api/sub/getAll
- Params:none, Body:none
- Response: a JSON with all the values on the collection

<a href="https://imgur.com/0BUqUEP"><img src="https://i.imgur.com/0BUqUEP.png" title="Example Postman image" /></a>

### Test */post* method

- Method: POST
- URL: localhost:<port_number>/api/sub/post
- Body type: Raw, JSON
- Body content: A JSON with a valid schema

  Example:
```txt
{
    "name": "Chilpancingo",
    "subdelegacion_id": 15,
    "delegacion_id": 21,
    "old_address": "Domicilio conocido",
    "num_sub": 50,
    "status": true
}
```
- Response:
``` {
    "name": "Chilpancingo",
    "subdelegacion_id": 15,
    "delegacion_id": 21,
    "old_address": "Domicilio conocido",
    "num_sub": 50,
    "status": true,
    "__v": 0
}
```

### Test */getOne/:id* method

- Method: GET
- URL: localhost:<port_number>/api/sub/getOne/id
- Params:none, Body:none
- Response: a JSON with the document data with that id

### Test */update/:id* method

- Method: PATCH
- URL: localhost:<port_number>/api/sub/update/id
> Example: localhost:3000/api/sub/update/6554238f791d0509e5795g9c
- Body type: Raw, JSON
- Body content: A JSON with a valid schema

  Example:
```txt
{
    "name": "Salina",
    "subdelegacion_id": 10,
    "delegacion_id": 200,
    "old_address": "NA"
}

```
- Response (only the indicated data on body will change):
``` {
    "_id": "6554238f791d0509e5795g9c",
    "name": "Salina",
    "subdelegacion_id": 10,
    "delegacion_id": 200,
    "old_address": "NA",
    "num_sub": 1,
    "status": true,
    "__v": 0
}
```

### Test */delete/:id* method

- Method: DELETE
- URL: localhost:<port_number>/api/sub/delete/id

> Example: localhost:3000/api/sub/delete/6554238f791d0509e5795a9c
- Params:none, Body:none
- Response:
> Document with sub tmp has been deleted..

## Contributing to this repo

1. Fork it (<https://github.com/FernandoTorresL/SIAP/fork>)
2. Create your feature branch (`git checkout -b feature/foo_bar`)
3. Commit your changes (`git commit -am 'Add some foo_bar'`)
4. Push to the branch (`git push origin feature/foo_bar`)
5. Create a new Pull Request

---

<div align="center">
    <a href="https://fertorresmx.dev/">
      <img height="150em" src="https://raw.githubusercontent.com/FernandoTorresL/FernandoTorresL/main/media/FerTorres-dev1.png">
  </a>
</div>



## Follow me 
[fertorresmx.dev](https://fertorresmx.dev/)

#### :globe_with_meridians: [Twitter](https://twitter.com/FerTorresMx), [Instagram](https://www.instagram.com/fertorresmx/): @fertorresmx

