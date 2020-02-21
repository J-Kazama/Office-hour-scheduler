var express =require('express');
var cors =require('cors');
var mongoose =require('mongoose');

var app=express();

app.use(cors()); // no idea what this does, seemed to work without
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
var connection =mongoose.connection

connection.on('error',console.error.bind(console,'connection error:'))
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
});

var listener = app.listen(1000, () => {
    console.log('Server is running ' + listener.address().port);
});