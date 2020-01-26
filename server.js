const express = require('express')
const app = express()
const expresslayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const env = require('dotenv').config
const indexRouter = require('./routes/home')
const oncologicoRouter = require('./routes/oncologico')
const path =  require('path')


app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layout/layout')
app.use(expresslayout)
app.use(express.static(path.join(__dirname, 'public')));





app.use('/', indexRouter)
app.use('/oncologico', oncologicoRouter)










app.listen(process.env.PORT || 3000)