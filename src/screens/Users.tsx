import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {useUserStore} from '../store/userStore';

const UserListScreen = () => {
  const {users, fetchUsers} = useUserStore();
  console.log('users', users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.email}>{item.address.city}</Text>
      <Text style={styles.email}>{item.address.street}</Text>
      <Text style={styles.email}>{item.phone}</Text>
      <Text style={styles.email}>{item.website}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});
