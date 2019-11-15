

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//ENGINE HANDLEBARS


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



//ROUTES
app.get('/', (req,res)=>{

    res.render('home')
});


app.listen(3000, console.log('le serveur tourne sur le port 3000'));
