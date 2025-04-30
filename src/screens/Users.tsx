import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useUserStore} from '../store/userStore';
import Header from '../components/Header';

const UserListScreen = () => {
  const {users, fetchUsers} = useUserStore();
  console.log('users', users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.title}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.email}>${item.price}</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        numColumns={2}
      />
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c67c4e',
  },
  list: {
    padding: 20,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#edd6cb',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    height: 200,
    marginVertical: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    top: 10,
  },
  email: {
    fontSize: 14,
    color: 'black',
  },
  image: {
    height: 120,
    width: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },

  plusButton: {
    backgroundColor: '#D17842',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
