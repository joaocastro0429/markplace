const express = require ('express')
const db= require('./src/database/db')

const app = express()
db.connect()

app.get('/', (req,res)=>{
    res.send({message:"Bem vindo ao nosso market-place!"})
})

app.listen(3000)


