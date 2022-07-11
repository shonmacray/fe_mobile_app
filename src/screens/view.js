import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../components/Button';

function ViewTodo() {
  const [value, setValue] = useState('');

  const handleChange = text => {
    setValue(text);
  };

  const saveTodo = async () => {
    const todos = await AsyncStorage.getItem('todos');
    const todoId = randomId(20, 'aA0');
    const newTodo = {id: todoId, value};

    if (todos) {
      const todoStore = JSON.parse(todos);
      const newStore = [newTodo, ...todoStore];
      AsyncStorage.setItem('todos', JSON.stringify(newStore));
    } else {
      AsyncStorage.setItem('todos', JSON.stringify([newTodo]));
    }
    setValue('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Update your Todo</Text>

        <TextInput
          style={styles.input}
          value={value}
          multiline
          placeholder="Type your todo"
          onChangeText={handleChange}
        />
        <Button onPress={saveTodo} title="Update Todo" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 200,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    marginVertical: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
});
export default ViewTodo;