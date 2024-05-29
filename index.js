const express = require("express")
const nodemailer =require("nodemailer")
const bodyParser = require('body-parser');
const sendMail = require("./sendMail")


const app =express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
 app.use(express.json())




 app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});








   app.post("/mail",sendMail)






app.listen(5000,()=>{
    console.log("app is running on port no 5000");
})