const express = require('express');
const mongoose = require('mongoose');
const app = express();
const request = require('request');

app.use(express.static("public"));
app.set("view engine", "ejs");


mongoose.connect('mongodb+srv://rhansen:Urdaneta1!@cluster0.lorna.mongodb.net/<dbname>?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(()=> {
	console.log('connected to DB')
}).catch(err => {
	console.log('ERROR:', err.message);
})




app.get("/", (req, res) =>{
res.render('home');
});

app.get("home", (req, res) =>{
	res.render('game');
})

app.listen(8000, () => {
	console.log("server listening on port 8000");
})


