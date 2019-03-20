
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.port || 4000;

const dbFile = 'flights.db';
const db = new sqlite3.Database(dbFile);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.serialize(() => {
    //création de la table des Flights 
    db.run('CREATE TABLE IF NOT EXISTS Flights (flights_id INTEGER PRIMARY KEY AUTOINCREMENT, company TEXT, aerodep TEXT, aerodes TEXT, date TEXT, hdep TEXT, harr TEXT, prix INTEGER, logo URL)');

    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'CDG', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 50, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'CDG', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 30, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'CDG', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 150, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'CDG', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 725, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'CDG', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 1200, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Singapore Airlines', 'LAX', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 650, 'public/images/logo-singaporeairlines.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'LAX', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 567, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'SFO', 'LAX', 'Mardi 19 mars 2019', '14H00', '16H00', 895, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'NYC', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 820, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'NYC', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 6900, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'NYC', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 2990, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Qatar Airways', 'LAX', 'CDG', 'Mardi 19 mars 2019', '14H00', '16H00', 895, 'public/images/logo-qatar-airways.jpg');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'SFO', 'CDG', 'Mardi 19 mars 2019', '14H00', '16H00', 678, 'public/images/Lufthansa-logo.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'LAX', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 580, 'public/images/Lufthansa-logo.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'NYC', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 476, 'public/images/Lufthansa-logo.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'LAX', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 568, 'public/images/Lufthansa-logo.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'LAX', 'NYC', 'Mardi 19 mars 2019', '14H00', '16H00', 456, 'public/images/Lufthansa-logo.png');
    db.run('INSERT INTO Flights (company, aerodep, aerodes, date, hdep, harr, prix, logo) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)', 'Lufthansa', 'LAX', 'SFO', 'Mardi 19 mars 2019', '14H00', '16H00', 567, 'public/images/Lufthansa-logo.png');
});

app.listen((port), function (error) {
    if (!error) console.log("app listening port " + port + " yall");
});

app.get('/vols', function (req, res) {
    db.all('SELECT * FROM Flights', function (err, data) {
        if (!err) res.send(data);
        else console.log(err);
    })
})

app.get('/vols/:from', function (req, res) {
    db.all('SELECT * FROM Flights WHERE Flights.aerodep=?', req.params.from, function (err, data) {
        if (!err) res.send(data);
        else console.log(err);
    })
})