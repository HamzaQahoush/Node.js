# Express js :

framework (set of function and tools , rules help us to build our app)
we want to focus on our applicaltion.

- alternative :

1. vanilla Node js
2. Adonis .
3. sails.

• To install Express.js `npm i --save express ` not dev because it's production dependencey.

• express js all about middleware , incoming requests is auto funneled through bunch of functions. use multiple functions and send responses

• we used body parser because `request` does not parse incoming request body.

• use `npm i --save body-parser` to add it .

• `use ` work with all http methods , `get` , `post` use as filter .

• router like mini express app linked(plugble) to otheer express app

## steps of using Routing :

1. create routes directory and add the files you want . i.e admin.js
2. you need to **import** express in admin.js using :

`const express = require('express')`

3. in admin.js create the router objects by calling express.Router as function.

` const router = express.Router()`

4. in admin.js export the router

`module.exports= router`

5. create your route using
   `router.get("/" , (req, res, next)=>{})`

6. import it in app,js using \

`const adminRoutes= require('./routes/admin')`

7. use it in app.js as :

   `app.use (adminRoutes)`

## 404 page :

to add 404 page :

    app.use("*", (req, res, next) => {
    res.status(404).send("<h1> 404 page not found </h1>");
    });

• same path can be used if a method is different .

• to serve static files css , we use , create puplic folder and use this command in app.js

`app.use(express.static(path.join(__dirname, "puplic")));`

• to send static file as responses use :

`const path = require('path')`
`res.sendFile(path.join(__dirname, '..' , 'view', 'index'))`
