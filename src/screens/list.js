import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Button from '../components/Button';
import ButtonSmall from '../components/ButtonSmall';

function List({navigation}) {
  const [todos, setTodos] = useState([]);

  useFocusEffect(() => {
    async function getTodos() {
      try {
        const todosData = await AsyncStorage.getItem('todos');
        if (todosData) {
          setTodos(JSON.parse(todosData));
        }
      } catch {}
    }

    getTodos();
  });

  const handlePress = () => {
    navigation.navigate('Create');
  };

  const deleteTodo = async id => {
    const todosData = await AsyncStorage.getItem('todos');
    if (todosData) {
      const myTodos = JSON.parse(todosData);

      const index = myTodos.findIndex(el => el.id === id);
      //   delete todo
      myTodos.splice(index, 1);
      AsyncStorage.setItem('todos', JSON.stringify(myTodos));
      setTodos(myTodos);
    }
  };

  const openUpdateScreen = item => {
    navigation.navigate('Update', {data: item});
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.value}</Text>
        <View style={styles.btnContainer}>
          <ButtonSmall onPress={() => openUpdateScreen(item)} title="update" />
          <View style={styles.space} />
          <ButtonSmall onPress={() => deleteTodo(item.id)} title="delete" />
        </View>
      </View>
    );
  };

  const sep = () => {
    return <View style={styles.line} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.inner}>
          <Text>My Todos</Text>
          <Button onPress={handlePress} title="Create New" />
        </View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={sep}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  container: {
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  line: {
    borderBottomWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 5,
  },
  space: {
    width: 20,
  },
});
export default List;
