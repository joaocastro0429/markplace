const mogoose = require("mongoose")


function conect(){
    mogoose.connect("mongodb+srv://joaocastro0429:castro0429@cluster0.5hiobtj.mongodb.net/usuario?retryWrites=true&w=majority&appName=Cluster0")

    .then(()=>{
        console.log("Conectado com sucesso ao banco de dados")
    })

    .catch((err)=>{
        console.log("Erro ao conectar com o banco de dados"+err)
    })


}

module.exports = conect