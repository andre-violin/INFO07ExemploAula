import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Title(props) {
  return (
    <Text style={styles.title}>{props.conteudo}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32
  }
});