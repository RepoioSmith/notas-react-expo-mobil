import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ballerina from '../assets/images/ballerina.jpg';


const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={Ballerina} style={styles.image}/>
      <Text style={styles.titulo}>Bienvenido a la Nuestra Super Aplicacion</Text>
      <Text style={styles.subtitulo}>Captura tus notas en cualquier lugar y en cualquier momento</Text>
      <Text>Edita tus notas</Text>
      <TouchableOpacity style = {styles.button} onPress={()=>router.push('./notes')}>
        <Text>Notas</Text>
      </TouchableOpacity>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,njustifyContent: "center",nalignItems: "center",
  },
  image:{
    width:100,
    height:100,
    margineBottom:20,
    borderRadius:10,
    alignContent:'center'
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    margineBottom:10,
    color:'#333',
    textAlign:'center'
  },
  subtitulo:{
    fontSize:30,
    fontWeight:'bold',
    margineBottom:20,
  },
  button:{
    backgroundColor: '#cf7500ff',
    paddingVertical:12,
    paddingHorizontal:30,
  }

})

export default HomeScreen