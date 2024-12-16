import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

export default function HomeScreen() {
  // Função para simular o envio de um evento para o Adjust
  const handleEventClick = () => {
    Alert.alert('Evento Enviado', 'Evento simulando um clique foi enviado para a Adjust!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
        <Text style={styles.title}>Bem-vindo!</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.subtitle}>Clique no botão abaixo para simular um evento:</Text>
        <Button title="Simular Evento" onPress={handleEventClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1CEDC',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  reactLogo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D3D47',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
