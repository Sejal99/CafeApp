import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useFetchMenu} from '../../store/userStore';
import {styles} from './styles';
import {Images} from '../../assets';
import {useCartStore} from '../../store/cartStore';
import AddToCartCounter from '../../components/AddToCartCounter';

const Menu = () => {
  const {fetchMenu, items} = useFetchMenu();
  const [itemsInCart, setItemsInCart] = useState(0);
  const {addToCart, cartItems, updateQuantity} = useCartStore();

  useEffect(() => {
    fetchMenu();
    console.log('sejal', items);
  }, []);
  const handleAdd = (item: any) => {
    console.log('item', item);

    setItemsInCart(prev => prev + 1);
    addToCart(item);
  };
  const renderItem = ({item}: {item: any}) => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem?.quantity || 0;
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.name}>{item.title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.email}>${item.price}</Text>
          {quantity > 0 ? (
            <AddToCartCounter
              initialCount={quantity}
              onChange={newQty => updateQuantity(item.id, newQty)}
              containerStyle={styles.h1}
            />
          ) : (
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => handleAdd(item)}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Image source={Images.coffeeIcon} tintColor={'#800020'} />
        <Text style={styles.text}>Coffee Menu</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default Menu;
