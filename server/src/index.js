const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();
const route = require('./Routes/index');
const DB = require('./MyDB/index');

DB.connectDB();




app.use(express.json());
app.use(cors());

route(app);


app.listen(port, () => console.log(`${process.env.API}`));
