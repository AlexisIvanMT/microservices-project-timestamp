// index.js
// Inicializa el servidor

var app = require('./myapp'); // Importa la lógica de la aplicación

// Escucha en el puerto configurado
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
