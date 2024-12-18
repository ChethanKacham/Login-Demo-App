const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const url = 'mongodb://localhost/DB'

const app=express()

app.use(cors())

mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected')
})

app.use(express.json())

const detailRouter = require('./routes/details')

app.use('/login',detailRouter)

app.listen(9000, ()=>{
    console.log('Server started')
})