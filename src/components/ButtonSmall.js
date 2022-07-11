import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function ButtonSmall({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#098',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
  },
});

export default ButtonSmall;
