var express = require("express");
var app = express();
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["public/input.py"]);

//set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

//routes

app.get("/", function(req, res){
    res.render("index");
})

app.listen(port, function(){
    console.log("app running");
})

pythonProcess.stdout.on('data', (data) => {
    console.log("data " + data);
});

var https = require("https");
setInterval(function() {
    https.get("https://safe-taiga-87184.herokuapp.com/");
}, 300000); // ping app every 5 minutes (300000)

