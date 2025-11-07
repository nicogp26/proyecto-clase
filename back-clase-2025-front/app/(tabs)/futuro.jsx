import { Text, View } from "react-native";
import estilos from "../../assets/Styles/Styles";



function Futuro(){




return(
    <View style={estilos.contenedor}>
        <Text style={estilos.titulo}>Tu yo del pasado te dejó este mensaje</Text>
        <View style={estilos.mensajeFuturo}>
 <Text style={estilos.textoMensaje}>Mensaje</Text>
              <Text style={estilos.textoMensaje}></Text>
        </View>
             

    </View>
)
}

export default Futuro;