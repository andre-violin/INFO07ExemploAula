import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador(props) {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if(valor % 2 === 0) {
      alert(valor + ' é par.')
    }
  }, [valor]);

  function incrementar() {
    setValor(valor + props.numero);
  }
  function decrementar() {
    setValor(valor - props.numero);
  }
  return (
    <View>
      <Button style={styles.btn} title="+" onPress={incrementar} />
      <Text style={styles.contador}>{valor}</Text>
      <Button style={styles.btn} title="-" onPress={decrementar} />
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {
    fontSize: 48
  },
  contador: {
    fontSize: 48
  }
})