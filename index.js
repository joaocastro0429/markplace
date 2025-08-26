const express = require ('express')

const app = express()

app.get('/', (req,res)=>{
    res.send({message:"Bem vindo ao nosso market-place!"})
})

app.listen(3000)