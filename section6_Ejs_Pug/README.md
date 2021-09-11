# Express js :

Templates enginee : to put Dynamic data and get html .

## available templateing engines :

1. EJS : `<p> <%= name %> </p> `
2. Pug : `p#{name}`
3. handlebars : `<p> {{name}} </p>`

## To install : `npm i --save ejs pug express-handlebars`

# pug :

## view engine tells express about dynamic templates engine we are trying to use.

• To use pug : in app.js

`app.set('view engine' , 'pug')`

`app.set('views',views)`

• compile dynamic templates with pug engine and where to find these templates.

• when we send a response , we use `render ('file')` method the file with pug extension .
