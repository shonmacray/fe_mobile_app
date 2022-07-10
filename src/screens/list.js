import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Button from '../components/Button';

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

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.value}</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
  },
});
export default List;
