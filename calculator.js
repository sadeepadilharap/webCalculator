const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html");
})

app.post("/", function(req,res){

    console.log(req.body);

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("Result of calculation is " + result);
})

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height*height);

    res.send("Your BMI is " + bmi)

})

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})