import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
// Meu componente Saudacao com a propriedade nome
export default function Saudacao(props) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  useEffect(() => {
    if(props.nome === "") {
      setNomeCompleto("Coiso");
    } else {
      setNomeCompleto(props.nome);
    }
  });

  return (
    <Text style={styles.titulo}>
      Bem-vindo {nomeCompleto}!
    </Text>
  )
}
const styles = StyleSheet.create({
  titulo: {
    color: "red",
    fontSize: 32
  }
})