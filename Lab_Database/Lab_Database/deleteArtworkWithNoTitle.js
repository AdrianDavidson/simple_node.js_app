var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
const fs = require('fs');


db.all("DELETE FROM artwork WHERE title = '[blank]'");
db.all("DELETE FROM artwork WHERE title = 'Abstract'");
db.all("DELETE FROM artwork WHERE title = '[no title]'");
db.all("DELETE FROM artwork WHERE title = '[title not known]'");
db.all("DELETE FROM artwork WHERE title = 'Blank'");
db.all("DELETE FROM artwork WHERE title like 'untitled%'");
