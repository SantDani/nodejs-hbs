const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Template - HBS

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function () {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// For CSS and JS
app.use(express.static(__dirname + '/public'));

// Routing - The order is important

app.get('/', (req, res) => {
    res.render('index' , {title: 'Home Page HBS'});
});

app.listen(PORT, ()=> console.log(`Express is listen at http://localhost:${PORT}`));
