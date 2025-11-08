import ballerina from '@/assets/images/ballerina.jpg';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={ballerina} />
      <Text style={styles.titulo}>Madre mia Willy chaval</Text>
      <Text style={styles.subtitulo}>
        Observa mi foto con Willy en cualquier lugar
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
  },
  image: {
    width: 400,
    height: 200,
    marginBottom: 20,
    borderRadius: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: 'thin',
    marginBottom: 10,
    color: '#ffff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ffc7fa',
    padding: 10,
    borderRadius: 20,
  },
});

export default HomeScreen;