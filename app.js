//- R00138984
//- Adrian Davidson
//- serverside frameworks

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// This opens a connection to my SQlite Database called database.db
let db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('And were conected!.');
});
// init app
const app = express();

// vew engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req, res){
  res.render('index', {

  });
});

app.get('/Checkout', function(req, res){
  res.render('Checkout', {

  });
});
// submit form route
app.post('/submitform', bodyParser, function(req, res) {

  db.run(`INSERT INTO artwork VALUES(title,price,thumbnailUrl)`, (req.body.title,req.body.price,req.body.thumbnailUrl), function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("hi")
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  res.render('admin.pug',{

      })
    })

//  Admin route
app.get('/admin', function(req, res){
  res.render('admin', {
  });
});

// artist route
app.get('/artist', function(req, res){
  var rowsOfImgs = [];
  db.serialize(function(){

// select all the items from the databse and dsiplay them
    db.each('SELECT * FROM artwork LIMIT 50 OFFSET 1', function(err, row){
      rowsOfImgs.push(row)
    }, function(){

        res.render('artist.pug',{
          h1:'All Art',
          row: rowsOfImgs
        })
    })
  })
});

// Sort lowest to highest route
app.get('/genre', function(req, res){
  var rowsOfImgs = [];
  db.serialize(function(){
    db.each('SELECT * FROM artwork ORDER BY price ASC LIMIT 50 OFFSET 1', function(err, row){
      rowsOfImgs.push(row)
    }, function(){
        res.render('genre.pug',{
          h1:'Lowest to Highest',
          row: rowsOfImgs
        })
    })
  })
});
// dsiplay by date route page
app.get('/artwork', function(req, res){
  var rowsOfImgs = [];
  db.serialize(function(){
    db.each('SELECT * FROM artwork ORDER BY dateText ASC LIMIT 50 OFFSET 10', function(err, row){
      rowsOfImgs.push(row)
    }, function(){
        res.render('artwork.pug',{
          h1:'Sorted by date',
          row: rowsOfImgs
        })
    })
  })
});

// to allow the use of css
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// define my port number
app.listen(3100, function(){
  console.log("server started");
});
