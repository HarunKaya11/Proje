const mysql = require("mysql");
const path = require('path');
const express= require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });

const app= express();

const connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "subekds"
});

connection.connect(function(error){
    if (error) throw error
    else console.log("veritabanına bağlanıldı")
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());




app.get("/", function(req,res){
    res.sendFile(__dirname+ "/login.html");
})

app.post("/",encoder,function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from users where username = ? and password = ?",[username,password],function(error,results,fields){
        if (results.length > 0 ) {
            res.redirect("/home");
        } else {
            res.redirect("/");
        }
        res.end("");
    })
})


app.get("/home",function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/subeler', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'şubeler.html'));
});

app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
});

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});


app.get('/harita', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'harita.html'));
});
app.get('/çalışanlar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'çalışanlar.html'));
});








app.listen(5000);
