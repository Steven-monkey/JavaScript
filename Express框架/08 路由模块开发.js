const express = require('express')
const home = require('./Router/home')
const admin = require('./Router/admin')
const app = express()
app.use('/home', home)
app.use('/admin', admin)
app.listen(2000)