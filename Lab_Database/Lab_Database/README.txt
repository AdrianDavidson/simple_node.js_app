Step 1)


Copy the following 3 files to the route of your project:

populateArtist.js
populateArtwork.js
deleteArtWorkWithNoTitle.js

Step 2) Ensure you have sqlite installed in your project:

	npm install --save sqlite 

Step 3) The name of the database in the files currently is "database.db", if you want to change 
this you must edit it from each of the files before continuing.

Step 4) run each of the files in sequence:

node populateArtist.js
node populateArtwork.js
node deleteArtWorkWithNoTitle.js

This should populate the db for you.

Alernatively just use the database.db in the data directory and refer to the above documents for the structure
of the tables.
















