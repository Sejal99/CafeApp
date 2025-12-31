import React, {useEffect, useState, memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useFetchMenu, useMenu} from '../../store/userStore';
import {styles} from './styles';
import {Images} from '../../assets';
import {useCartStore} from '../../store/cartStore';
import AddToCartCounter from '../../components/AddToCartCounter';
import {useNavigation} from '@react-navigation/native';

// --- Separate Card Component to handle Image State safely ---
const MenuCard = memo(({item, onNavigate, onAdd, cartItems, updateQuantity}) => {
  const FALLBACK_IMAGE = 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/123f684f-e229-4bf7-9e2f-0f632dd53136_176470.jpg';
  
  // Image Logic
  let initialUri = FALLBACK_IMAGE;
  // Handle both APIs: 'image' from coffee or 'image' from recipes
  const rawImage = Array.isArray(item.image) ? item.image[0] : item.image;

  if (typeof rawImage === 'string' && rawImage.startsWith('http')) {
    initialUri = rawImage;
  }

  const [imgSrc, setImgSrc] = useState({ uri: initialUri });

  const cartItem = cartItems.find(i => i.id === item.id && i.source === 'menu');
  const quantity = cartItem?.quantity || 0;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onNavigate(item)}>
      <Image 
        source={imgSrc} 
        style={styles.image} 
        onError={() => setImgSrc({ uri: FALLBACK_IMAGE })}
      />
      <Text style={styles.name}>{item.title ?? item.name}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.email}>${item.price ?? 5.50}</Text>
        {quantity > 0 ? (
          <AddToCartCounter
            initialCount={quantity}
            onChange={newQty => updateQuantity(item.id, newQty, 'menu')}
            containerStyle={styles.h1}
            buttonStyle={styles.button}
          />
        ) : (
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => onAdd(item)}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
});

const Menu = () => {
  const {fetchMenu, items, isLoading} = useFetchMenu();
  const {fetchMenuItems, menuItems} = useMenu();
  const {addToCart, cartItems, updateQuantity} = useCartStore();
  const navigation = useNavigation();

  useEffect(() => {
    fetchMenu();
    fetchMenuItems();
  }, []);

  const handleAdd = (item: any) => {
    addToCart({...item, source: 'menu'});
  };

  const combinedData = [
    ...(Array.isArray(items) ? items : []),
    ...(Array.isArray(menuItems) ? menuItems : []),
  ];

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#800020" />
        </View>
      ) : (
        <>
          <View style={styles.heading}>
            <Image source={Images.coffeeIcon} tintColor={'#800020'} />
            <Text style={styles.text}>Coffee Menu</Text>
          </View>
          <FlatList
            data={combinedData}
            keyExtractor={(item, index) => item.id?.toString() + index}
            renderItem={({item}) => (
              <MenuCard 
                item={item}
                onNavigate={(itm) => navigation.navigate('Details', {item: itm})}
                onAdd={handleAdd}
                cartItems={cartItems}
                updateQuantity={updateQuantity}
              />
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Menu;
