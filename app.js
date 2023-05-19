const express = require("express");
const mongoose = require('mongoose'); 
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")

const app = express();
const port = 3000;

const DB='mongodb+srv://yashkhandelwal:qwerty12345@cluster0.8ro2fwj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB,{
  useNewUrlParser:true
}).then(()=>
{
  console.log(`Connection successful`);
}).catch((err)=>(`Connection failed`));


app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');


app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});