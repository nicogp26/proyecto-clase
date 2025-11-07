import axios from "axios";
import { Text, TextInput, View } from "react-native";
import estilos from "../../assets/Styles/Styles";


import { useState } from "react";
import Boton from "../../assets/componentes/boton";

export default function Index() {

const [mensaje, setMensaje] = useState("");

function enviarMensaje(){

  const mensaje = {
    mensaje:mensaje
  }

axios.post("/subir",mensaje)
.then(function (res){
alert("El mensaje se envio");
setTimeout(function(){
  router.push("./futuro")
},1000)

router.push("./futuro")


})

.catch();


}

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Bienvenido a la máquina del tiempo</Text>
  <Text style={estilos.texto}>
    A través de esta aplicación vamos a poder enviar un mensaje hacia el
    futuro. Escribe tus ideas y envíalas a tu "yo" en el futuro
  </Text>
  <TextInput
    style={estilos.input}
    placeholder="Escribe tu mensaje..."
    placeholderTextColor="#f47b7b"
    value={mensaje}
    onChangeText={setMensaje}
    multiline
  />

     <Boton texto="Enviar" />
     
    </View>
  );
}
