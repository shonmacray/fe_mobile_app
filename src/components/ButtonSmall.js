import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function ButtonSmall({title, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={{...style, ...styles.container}}>
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
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
  },
});

export default ButtonSmall;
