const express = require ('express')
const db= require('./database/db')

const app = express()
db()

app.get('/', (req,res)=>{
    res.send({message:"Bem vindo ao nosso market-place!"})
})

app.listen(3000)


