import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function Button({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#097',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
  },
});

export default Button;
