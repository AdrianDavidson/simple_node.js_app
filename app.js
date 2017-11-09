const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

// init app
const app = express();

// vew engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res){
  res.render('index', {
    title:'Home page',
    intro:'Hi, welcome to my simple portfolio project.Here I will list a few things I like and tell you something about myself.',
  });
});

// CV page
app.get('/CV', function(req, res){
  res.render('CV', {
    title:'CV page'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title:'Conact me page'
  });
});

// css
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use(express.static(path.join(__dirname, 'public')));


// start server
// this gives me a error.. i need to change it
// everytime i start
app.listen(3006, function(){
  console.log("server started on port 3000...");
});
