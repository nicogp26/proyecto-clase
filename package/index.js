const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const axios = require ("axios");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 5000;

app.listen(PORT,function(){console.log("CONECTADO AL PUERTO" + PORT);});


const bbdd = "app-future";
const url = "mongodb+srv://nicogp26:Nicolasgp26@cluster0.jelmbp7.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=Cluster0"

const connection = mongoose.connect(url);

connection.then(function () { 
    console.log("CONECTADO A LA BASE DE DATOS");
}).catch(function (error){
    console.log("Error en la conexion" + error);
});

require("./assets/models/mensajes.js");
   
const Mensajes = mongoose.model("mensajes");


app.post("/subir",function(req,res){

    const mensajes = req.body.mensajes;
    
    try {
        Mensajes.create(mensajes);

        res.send({
            status: true,
            message:"Mensaje Enviado"
        })
    }

    catch (error) {

        res.send({
            status: false,
            message: "No se logro enviar el mensaje",
            error:error.message
        })
    }

});
