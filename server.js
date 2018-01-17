var express = require('express');
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.set('view engine', 'ejs');

app.get('/', (req, res) => { res.send('M3 Talks - Wellcome To The Future'); });

app.get('/index', (req, res) => { res.render('pages/index'); });

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Algo malo ha sucedido! :S');
});

app.listen(port, ip, function () {
	console.log('Servidor corriendo en http://%s:%s', ip, port);
});

module.exports = app;