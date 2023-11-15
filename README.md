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
* [Contributing to this repo](#contributing-to-this-repo)
* [Follow Me](#follow-me)

## Introduction

This project will be operated by workers of the _Coordinación de Afiliación - División de Soporte a los Procesos de Afiliación_, an office on Instituto Mexicano del Seguro Social (IMSS, DIR, CA, DSPA) from Ciudad de México, México.

This project must build a RESTful API using Node, Express and MongoDB with the help of this awesome tutorial series [Let's Build a Node.js REST API](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42) made by [Victoria Lo](https://lo-victoria.com/)

[Victoria Lo's Github repo](https://github.com/victoria-lo/TAPI)

Also, we build this project with the help of this page [How to build a RESTful API using Node, Express and MongoDB](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/) made by [Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)

[Nishant Kumar's Github repo](https://github.com/nishant-666/Rest-Api-Express-MongoDB)

With this API, users can get general info about all the 'Subdelegaciones IMSS' from México. Subdelegaciones are the customer's office for a variety of formalities ono social security.

## Technologies used

This project was build with the use of:

![MongoDB](https://img.shields.io/static/v1?style=for-the-badge&message=MongoDB&color=47A248&logo=MongoDB&logoColor=FFFFFF&label=)
![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Git](https://img.shields.io/static/v1?style=for-the-badge&message=Git&color=F05032&logo=Git&logoColor=FFFFFF&label=)
![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)

- Javascript
- MongoDB
- Express
- Node.JS
- Git
- Github

## Tools

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Visual Studio Code](https://img.shields.io/static/v1?style=for-the-badge&message=VS+Code&color=007ACC&logo=Visual+Studio+Code&logoColor=FFFFFF&label=)

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

## Follow me
<p align="center">
    <a href="https://www.buymeacoffee.com/fertorresmx"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=fertorresmx&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>
</p>

<div align="center">
    <a href="https://fertorresmx.dev/">
      <img height="150em" src="https://raw.githubusercontent.com/FernandoTorresL/FernandoTorresL/main/media/FerTorres-dev1.png">
  </a>
</div>

<div align="center">
  <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/FerTorresMx">
</div>



