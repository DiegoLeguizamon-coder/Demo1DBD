import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo-dbd.png')}></Image>
      <Text>Input  Dato 1 </Text>
      <TextInput 
        placeholder="Ingrese dato 1"
        style = {{width:200, height:10}}
      ></TextInput>

      <Button
        title="Enviar"
        color="#59E82A"
      ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
