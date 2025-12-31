import React, {useEffect, useState, memo} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  StatusBar,
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

// --- Separate Component for each Item to handle its own Image State ---
const CafeItemCard = memo(({item, onNavigate, onAdd, cartItems, updateQuantity}) => {
  const FALLBACK_IMAGE = 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/123f684f-e229-4bf7-9e2f-0f632dd53136_176470.jpg';
  
  // Logic to determine initial URI
  let initialUri = FALLBACK_IMAGE;
  const rawImage = Array.isArray(item.image) ? item.image[0] : item.image;

  if (typeof rawImage === 'string' && rawImage.startsWith('http')) {
    initialUri = rawImage;
  }

  // Hook is now inside a proper functional component
  const [imgSrc, setImgSrc] = useState({ uri: initialUri });

  const cartItem = cartItems.find(i => i.id === item.id && i.source === 'home');
  const quantity = cartItem?.quantity || 0;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => onNavigate(item)}>
      
      <View style={styles.imageContainer}>
        <Image 
          source={imgSrc} 
          style={styles.cardImage} 
          resizeMode="cover"
          onError={() => setImgSrc({ uri: FALLBACK_IMAGE })}
        />
        <View style={styles.tag}>
          <Text style={styles.tagText}>Hot</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.cardSubtitle} numberOfLines={1}>Freshly Brewed</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>$4.50</Text> 
          
          {quantity > 0 ? (
            <AddToCartCounter
              initialCount={quantity}
              onChange={newQty => updateQuantity(item.id, newQty, 'home')}
              containerStyle={styles.counterScale}
            />
          ) : (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => onAdd(item)}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
});

// --- Main Screen Component ---
const UserListScreen = () => {
  const {users, fetchUsers, isLoading} = useUserStore();
  const {addToCart, cartItems, updateQuantity} = useCartStore();
  
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [locationName, setLocationName] = useState('Locating...');
  const navigation = useNavigation();

  useEffect(() => {
    Geocoder.init('AIzaSyDoWmn385OVIlSmfwtvtDXdjtBxU1ta8KA'); 
    fetchUsers();
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      } catch (err) {
        console.warn(err);
      }
    } else {
      setHasLocationPermission(true);
    }
  };

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
          updateAddress(latitude, longitude);
        },
        error => console.log('Location Error:', error.message),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [hasLocationPermission]);

  const updateAddress = (lat, lng) => {
    Geocoder.from(lat, lng)
      .then(json => {
        const address = json.results[0].formatted_address;
        setLocationName(address);
      })
      .catch(error => console.warn(error));
  };

  const handleMarkerDrag = (coords) => {
    setLocation(coords);
    updateAddress(coords.latitude, coords.longitude);
  };

  const handleAdd = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id && i.source === 'home');
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + 1, 'home');
    } else {
      addToCart({...item, source: 'home'});
    }
  };

  const filteredItems = users.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFCFB" />
      <Header
        searchText={searchText}
        onChangeSearch={setSearchText}
        onLocationPress={() => setShowMap(true)}
        locationName={locationName}
      />

      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Our Menu</Text>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#800020" />
            <Text style={{marginTop: 10, color: '#800020'}}>Grinding beans...</Text>
          </View>
        ) : (
          <FlatList
            data={filteredItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CafeItemCard 
                item={item} 
                onNavigate={(itm) => navigation.navigate('Details', {item: itm})}
                onAdd={handleAdd}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
              />
            )}
            contentContainerStyle={styles.list}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {showMap && location && (
        <View style={styles.mapOverlay}>
          <CustomMapView
            latitude={location.latitude}
            longitude={location.longitude}
            markerTitle="Delivery Location"
            onMarkerDrag={handleMarkerDrag}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowMap(false)}>
            <Text style={styles.closeText}>Confirm Location</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default UserListScreen;