const express = require("express");
const app = express();
// eslint-disable-next-line no-unused-vars
const Record = require("./models/records");
// const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("../server/config/key");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());


// app.post('/',(req,res) => {
//     // const Record =  new Record (req.body)
//     // const test = req.body.test
//     res.send(req.body)
// })

// app.use('/test', require('./server/routes/article'));
app.use('/routes', require('../server/routes/api'));
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});

// module.exports = app;    







































// const express = require('express')
// const connectDB =require('./DB/conn');
// const Record= require('./models/records');
// connectDB();
// const app = express();
// const port = process.env.PORT ||3000;
// app.use(express.json());

// const bodyParser = require('body-parser');

// // app.get('/',(req,res)=>{
// //     res.send('hello from the other side by moriani')

// // })
// // create new record 
// app.post('/test',(req,res) => {
//     // const Record =  new Record (req.body)
//     const test = req.body.test
//     res.send(req.body.test)
// })

// app.listen(port,function(){
//     console.log(`connection is setup at  ${port}`);
// })