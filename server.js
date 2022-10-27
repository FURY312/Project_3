const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.listen(8080, function(){
    console.log('listenting 8080')


});

app.get('/', function(req,  res){
    res.sendFile(__dirname + '/public/html/index.html')
});

app.get('/Economist', function(req,  res){
    res.sendFile(__dirname + '/public/html/indexfu.html')
});

app.get('/guestdook', function(req,  res){
    res.sendFile(__dirname + '/public/html/guestdook.html')
});

app.get('/host', function(req,  res){
    res.sendFile(__dirname + '/public/html/button.html')
});

app.get('/bu', function(req,  res){
    res.sendFile(__dirname + '/public/html/host.html')
});

app.get('/Record', function(req,  res){
    res.sendFile(__dirname + '/public/html/indexup.html')
});

app.get('/PJ', function(req,  res){
    res.sendFile(__dirname + '/public/html/project.html')
});

app.get('/Project1', function(req,  res){
    res.sendFile(__dirname + '/public/html/project1.html')
});

//nodemon ./server.js localhost 8080