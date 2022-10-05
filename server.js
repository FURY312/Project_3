const express = require('express');
const app = express();
app.use('/public', express.static('public'));

app.listen(8080, function(){
    console.log('listenting 8080')
});

app.get('/', function(req,  res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/Economist', function(req,  res){
    res.sendFile(__dirname + '/indexfu.html')
});

app.get('/guestbook', function(req,  res){
    res.sendFile(__dirname + '/button.html')
});

app.get('/host', function(req,  res){
    res.sendFile(__dirname + '/button.html')
});

app.get('/bu', function(req,  res){
    res.sendFile(__dirname + '/button.html')
});
