var express = require('express');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
var app = express();

//DB setting 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGO_URL);
// mongoose.connect("mongodb://127.0.0.1:27017/contacts_db");
var db = mongoose.connection;
db.once('open', function(){
    console.log('DB connected');
});
db.on('error', function(){
    console.log('DB ERROR : ', err);
});


//Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

//Port setting
const PORT = process.env.PORT || 4000; //못 찾으면 4000번으로
// const PORT = 4000; 

app.listen(PORT, function(){
    console.log('server on! http://localhost:'+PORT);
});
