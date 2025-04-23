const express = require("express");
const mongoose = require("mongoose");
const app = express()   
require("dotenv").config();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {AuthRoutes , AdviceRequestRoutes , CommentRoutes} = require('./Routes/routes')
 
app.use(AdviceRequestRoutes);
app.use(AuthRoutes);
app.use(CommentRoutes);


const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(port, console.log(`http://localhost:${port}`));
}).catch((err) => {
  console.log(err);
});
