var port     = process.env.PORT || 5000;
var app = require('./app/app')

app.listen(port);
console.log("listening to port: " + port)