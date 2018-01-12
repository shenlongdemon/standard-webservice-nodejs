const http         = require('http'),
fs           = require('fs'),
path         = require('path'),
express 	   = require("express"),
compression  = require('compression'),
bodyParser   = require("body-parser"),      
env          = process.env,
controller   = require("./controllers/controller")
;
var app = express();


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json({ limit: '5mb' }));
app.use(compression());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/static'));

app.get("/", function (req, res){
	res.sendFile("/index.html");
});

app.get("/api/:service/:action/:obj", controller.doget);
app.post("/api/:service/:action", controller.dopost);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
