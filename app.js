var mysql = require('mysql');
var randomstring = require("randomstring");

var arguments = (process.argv.slice(2));
var databaseIndex = arguments.indexOf("--database");
var portIndex = arguments.indexOf("--port");
if(databaseIndex<0 || portIndex<0){
    throw "-- database and --port parameters are REQUIRED, Zeinab";
}

var database = arguments[databaseIndex + 1];
var port = parseInt(arguments[portIndex + 1]);

// Connection configuration
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: database,
    port: port
});

// declare and initialize loop variables
var wholeRandomFrom0to99 = 0, randomBalance = 0, randomGender = "", randomName = "", time = 0;

function looper() {
    //generate random values + current time
    wholeRandomFrom0to99 = Math.floor(Math.random() * 100);
    randomBalance = wholeRandomFrom0to99 * 100;
    randomGender = wholeRandomFrom0to99 % 2 == 0 ? "male" : "female";
    randomName = randomstring.generate({
        length: 9,
        charset: "alphabetic",
        readable: true,
        capitalization: "lowercase"
    });
    time = (new Date()).getTime() / 1000;

    var queryString = mysql.format("INSERT INTO `clients_data`(`gender`, `codename`, `balance`, `creation_time`) VALUES (?,?,?,?)", [randomGender, randomName, randomBalance, time]);

    conn.query(queryString);

    console.log("Executed query: \n\t" + queryString + "\n");
}

setInterval(looper, 1000);
