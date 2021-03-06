// Initialize express
const express = require('express')
// const methodOverride = require('method-override')
const app = express()
const exphbs = require('express-handlebars');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');


app.get('/', (req,res) => {
    res.render('home', {msg: 'hello world'}) 
})





const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000')
})