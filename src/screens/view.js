import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

function ViewTodo({route}) {
  const {value} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Your Todo</Text>

        <View style={styles.input}>
          <Text style={styles.smallTexts}>{value}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    fontSize: 30,
    marginVertical: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
  smallTexts: {
    fontSize: 23,
  },
});
export default ViewTodo;
