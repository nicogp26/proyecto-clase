const mongoose = require("mongoose");

//const UsuariojeSchema = new mongoose.Schema({

const MensajeSchema = new mongoose.Schema({
    mensaje:String
},{colection:"mensajes"});

mongoose.model("mensajes",MensajeSchema)
    


