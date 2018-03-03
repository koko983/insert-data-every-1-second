# insert-data-every-1-second
a NodeJs script to insert semi-random data into a DB table each 1 second.

# usage
1- import the **_database.sql_** file into an existing database.

2- `cd` into base folder (the one with **_app.js_** file).

3- run `npm install`

4- run `node app.js --database [[YOUR_DATABASE_NAME]] -- port [[MYSQL_PORT]]`

5- console will log the insert operation (each 1 second)

6- end program by hitting **Ctrl + C**
