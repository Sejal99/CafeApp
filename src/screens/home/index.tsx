import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {useUserStore} from '../../store/userStore';
import {useCartStore} from '../../store/cartStore';
import AddToCartCounter from '../../components/AddToCartCounter';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomMapView from '../../components/MapView';
import Geocoder from 'react-native-geocoding';

const UserListScreen = () => {
  const {users, fetchUsers, isLoading} = useUserStore();
  const [itemsInCart, setItemsInCart] = useState(0);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const {addToCart, cartItems, updateQuantity} = useCartStore();
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const navigation = useNavigation();
  const [locationName, setLocationName] = useState('');

  const handleMarkerDrag = (coords: {latitude: number; longitude: number}) => {
    setLocation(coords);
    Geocoder.from(coords.latitude, coords.longitude)
      .then(response => {
        const address = response.results[0].formatted_address;
        setLocationName(address);
      })
      .catch(error => console.warn(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    Geocoder.init('');
  }, []);

  const filteredItems = users.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleCloseMap = () => {
    setShowMap(false);
  };

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
    console.log('Got location:', location);
  }, []);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
          console.log('Location:', {latitude, longitude});
          Geocoder.from(latitude, longitude)
            .then(response => {
              const address = response.results[0].formatted_address;
              console.log('name', address);

              setLocationName(address);
            })
            .catch(error => console.warn(error));
        },

        error => {
          console.log('Error:', error.code, error.message);
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

  console.log('Permission:', hasLocationPermission);
  console.log('Location state:', location);
  return (
    <View style={styles.container}>
      <Header
        searchText={searchText}
        onChangeSearch={setSearchText}
        onLocationPress={() => setShowMap(true)}
        locationName={locationName}
      />

      <>
        <View style={styles.categoryContainer} />

        <View style={styles.listContainer}>
          {isLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#800020" />
            </View>
          ) : (
            <FlatList
              data={searchText ? filteredItems : users}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.list}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
          )}
        </View>
      </>
      {showMap && location && (
        <View style={styles.map}>
          <CustomMapView
            latitude={28.679079}
            longitude={77.06971}
            markerTitle="You are here"
            markerDescription="This is your current location"
            onMarkerDrag={handleMarkerDrag}
          />

          <TouchableOpacity style={styles.closeButton} onPress={handleCloseMap}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UserListScreen;
