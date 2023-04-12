require('dotenv').config()
const cors = require("cors")
const express = require('express')
const busOperatorRoutes = require('./src/routes/busOperatorRoutes')
const busDetailRoutes = require('./src/routes/busDetailsRoutes')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL || ""

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
  });
// app.use(express.urlencoded({ extended: false }));
app.use('/',busOperatorRoutes)
app.use('/',busDetailRoutes)

// Connect to DATABASE
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))

