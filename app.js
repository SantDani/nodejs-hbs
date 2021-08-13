const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Template - HBS

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// For CSS and JS
app.use(express.static(__dirname + '/public'));

// Routing - The order is important

app.get('/', (req, res) => {
    res.render('index' , {title: 'Home Page HBS'});
});

app.get('/films', (request,  response) => {
    response.render('films', {
        title: 'films',
        films: [
            {
                id: 1,
                name: 'Jhon Wick',
                generes: ['action', 'crime', 'thriller']
            },
            {
                id: 2,
                name: 'Fast and Furious 9',
                generes: ['action', 'adventure', 'crime']
            }
        ]
    });
});

app.get('/generes', (request, response)=>{
    response.render('generes', {
        title: 'generes',
        generes:[
            {
                status: false,
                name: 'action'
            }
            ,{
                status: false,
                name: 'adventure'
            }
            ,{
                status: false,
                name: 'crime'
            },
            {
                status: false,
                name: 'thriller'
            },
        ]
    })
});

app.use((request, response) => {
    response.status(404).render('404', {
        title: 404,
        description: 'Page not found'
    });
});

app.listen(PORT, ()=> console.log(`Express is listen at http://localhost:${PORT}`));
