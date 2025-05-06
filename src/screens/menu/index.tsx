import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFetchMenu} from '../../store/userStore';
import {styles} from './styles';
import {Images} from '../../assets';
import {useCartStore} from '../../store/cartStore';
import AddToCartCounter from '../../components/AddToCartCounter';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const {fetchMenu, items, isLoading} = useFetchMenu();
  const [itemsInCart, setItemsInCart] = useState(0);
  const {addToCart, cartItems, updateQuantity} = useCartStore();
  const navigation = useNavigation();
  useEffect(() => {
    fetchMenu();
  }, []);

  const handleAdd = (item: any) => {
    setItemsInCart(prev => prev + 1);
    addToCart({...item, source: 'menu'});
  };
  console.log('isLoading', items);

  const handleNavigate = item => {
    navigation.navigate('Details', {item});
  };

  const renderItem = ({item}: {item: any}) => {
    const cartItem = cartItems.find(
      i => i.id === item.id && i.source === 'menu',
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
              onChange={newQty => updateQuantity(item.id, newQty, 'menu')}
              containerStyle={styles.h1}
              buttonStyle={styles.button}

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
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Menu;
