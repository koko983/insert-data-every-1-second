# insert-data-every-1-second
a NodeJs script to insert semi-random data into a DB table each 1 second.

# usage
1- export the "database.sql" file into an existing database.

2- cd into base folder (the one with "app.js" file).

3- run node app.js --database [[DATABASE_NAME]] -- port [[MYSQL_PORT]]

4- console will log the insert operation (each 1 second)

5- end program by hitting Ctrl + C