import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {useUserStore} from '../../store/userStore';
import {useCartStore} from '../../store/cartStore';
import AddToCartCounter from '../../components/AddToCartCounter';

import {Images} from '../../assets';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const UserListScreen = () => {
  const {users, fetchUsers} = useUserStore();
  const [itemsInCart, setItemsInCart] = useState(0);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const {addToCart, cartItems, updateQuantity} = useCartStore();
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    fetchUsers();
    console.log('ssss', users);
  }, []);

  const filteredItems = users.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setHasLocationPermission(
          granted === PermissionsAndroid.RESULTS.GRANTED,
        );
      } catch (err) {
        console.warn(err);
      }
    } else {
      setHasLocationPermission(true);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          console.log('sejal', error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasLocationPermission]);

  const handleAdd = (item: any) => {
    const existingItem = cartItems.find(
      i => i.id === item.id && i.source === 'home',
    );
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1, 'home');
    } else {
      setItemsInCart(prev => prev + 1);
      addToCart({...item, source: 'home'});
    }
  };
  const handleNavigate = item => {
    navigation.navigate('Details', {item});
  };

  useEffect(() => {
    console.log('items in cart', itemsInCart);
  }, [itemsInCart]);

  const renderItem = ({item}: {item: any}) => {
    const cartItem = cartItems.find(
      i => i.id === item.id && i.source === 'home',
    );
    const quantity = cartItem?.quantity || 0;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigate(item)}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.email}>${item.price}</Text>
          {quantity > 0 ? (
            <AddToCartCounter
              initialCount={quantity}
              onChange={newQty => updateQuantity(item.id, newQty, 'home')}
              containerStyle={styles.h2}
            />
          ) : (
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => handleAdd(item)}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header searchText={searchText} onChangeSearch={setSearchText} />

      <View style={styles.overlayBox}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Promo</Text>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Buy one get</Text>
            <Text style={styles.textStyle}> one FREE</Text>
          </View>
        </View>
        <Image source={Images.coffee} style={styles.coffeeImage} />
      </View>

      <FlatList
        data={searchText ? filteredItems : users}
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
    marginVertical: 30,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#edd6cb',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
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
  overlayBox: {
    position: 'absolute',
    top: 230,
    alignSelf: 'center',
    height: 100,
    width: 300,
    backgroundColor: '#F2D2BD',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  coffeeImage: {
    width: 110,
    height: 102,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    backgroundColor: 'red',
    color: 'white',
    width: 50,
    textAlign: 'center',
    borderRadius: 3,
    right: 10,
  },
  textContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  textView: {
    alignItems: 'center',
    marginHorizontal: 10,
    top: 10,
  },
  textStyle: {
    left: 20,
    fontSize: 20,
    fontWeight: 600,
    color: '#80461B',
  },
  h2: {
    left: 15,
  },
});
