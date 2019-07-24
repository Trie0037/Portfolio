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