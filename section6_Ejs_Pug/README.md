# Express js :

Templates enginee : to put Dynamic data and get html .

## available templateing engines :

1. EJS : `<p> <%= name %> </p> `
2. Pug : `p#{name}`
3. handlebars : `<p> {{name}} </p>`

## To install : `npm i --save ejs pug express-handlebars`

# pug :

• view engine tells express about dynamic templates engine we are trying to use.

• To use pug as dynamci templates: in app.js

`app.set('view engine' , 'pug')`

`app.set('views',views)`

• compile dynamic templates with pug engine and where to find these templates.

• when we send a response on route, we use `res.render ('file')` method the file with pug extension .

• to use **dynamic data** when we render the page , we can pass second arugemnt in render method as object and use it .

`res.render('pugFile' , {item : items , docTitle:'shop})`
and then we can map it use data in it . using `each items in item` and wrap all dynamic content

• we can use layout , to extend our data in other page .

` extends layout/main-layout.pug`

and use `block anyName ` and inject in it our changing data. with indentation.
`

# handlebars

• import handlebars in app.js : \
`const express_Handlebars= require('express-handlebars')`

• tell express that handlebars that engien is exists , register it .\
 `app.engine( "hbs", express_Handlebars({ defaultLayout: "main-layout", extname: "hbs", layoutsDir: "views/layouts/", })`
`app.set('view engine' , 'handlebars')` , put layout Null in case you did not create it .

• when we use handlebars we need to specify the layout folder.

• we use `{{{ body }}}` to set dynamic data in handlebars.
• {{#if }} {{/if }} the syntax to use if . we need to set the condition in j.s file when we render it. cause handlebars deal with true and False.

# Ejs

• app.set('view engine' , 'ejs')
• app.set('views' , 'views')
