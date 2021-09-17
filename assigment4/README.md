## setup

1. npm init -y
2. npm i --save express ejs body-parser
3. npm i nodemon --save-dev
4. create app.js file , views , routes , includes .
5. set the **script** in package.json to "start": "nodemon app.js".
6. create express app by require express. and call it as a function.

```
const express= require('express')
const app = express()
app.listen(3000)
```

7. set the view engine and the views folder:

```
app.set('view engine' , 'ejs')
app.set("views", "views");
```

8. setup the routes and there method .
9. use

```
const express= require('express')
const router = express.Router()
exports.routes = router;

```

9. we need to import it in app.js as :

```
const index = require("./routes/index");

//then use it
app.use(index.routes);

```
