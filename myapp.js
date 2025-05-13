// myapp.js
// Configuración de la aplicación

var express = require('express');
var app = express();
// Sirve archivos desde la carpeta /public, accesibles con la ruta /public/archivo
app.use("/public", express.static(__dirname + "/public"));

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// Elimina la línea redundante para evitar confusión
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", function (req, res) {
  const dateParam = req.params.date;
  let date;
    console.log(dateParam);
 if (!dateParam || dateParam.trim() === '') {
    // Caso vacío → usa fecha actual
    date = new Date();
  } else if (!isNaN(dateParam)) {
    // Caso número → timestamp Unix
    date = new Date(parseInt(dateParam));
  } else {
    // Caso cadena de texto con formato de fecha
    date = new Date(dateParam);
  }

  console.log(date);
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
module.exports = app;