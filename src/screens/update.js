import React, {useState} from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../components/Button';

function Update({route}) {
  const {data} = route.params;
  const [value, setValue] = useState(data.value);

  const handleChange = text => {
    setValue(text);
  };

  const updateTodo = async () => {
    const store = await AsyncStorage.getItem('todos');

    if (store) {
      const newTodo = {id: data.id, value};
      const todoStore = JSON.parse(store);

      const index = todoStore.findIndex(el => el.id === data.id);
      // delete old todo
      todoStore.splice(index, 1);

      const newStore = [newTodo, ...todoStore];
      AsyncStorage.setItem('todos', JSON.stringify(newStore));
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
        <Button onPress={updateTodo} title="Update Todo" />
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
export default Update;
