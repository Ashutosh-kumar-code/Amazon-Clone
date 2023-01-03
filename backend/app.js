require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");

app.use(express.json());
app.use(cors());
const router = require("./routes/router");
app.use(router);

const port = 8005;

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
});

DefaultData();