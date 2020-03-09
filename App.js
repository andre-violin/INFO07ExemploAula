import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Saudacao from './src/components/Saudacao';
import Contador from './src/components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Saudacao nome="" sobrenome="Violin" />
      <Saudacao nome="André" sobrenome="Violin" />
      <Contador numero={1} />
      {/* <Contador numero={5} />
      <Contador numero={15} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
