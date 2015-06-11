var express= require('express');

var app= express();

app.get('/preguntas', function(req, res){
    res.send('<h1> PREGUNTAS </h1>'+
            '<p> esto es una prueba</p>');
});

app.get('/respuestas', function(req, res){
    res.send("<h1> RESPUESTAS </h1>");
});

app.listen(8000);
console.log("Listening on port 8000");
