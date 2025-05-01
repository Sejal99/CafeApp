import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useCartStore} from '../../store/cartStore';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets';
import AddToCartCounter from '../../components/AddToCartCounter';

const AddToCart = () => {
  const {cartItems, removeFromCart, clearCart, updateQuantity} = useCartStore();
  console.log('cart items', cartItems);
  const renderItem = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.name}>{item.title}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10}}>
          <Image source={Images.star} style={{height: 20, width: 20}} />
          <Text style={styles.rating}>{item.rating.rate}</Text>
        </View>
        <Text style={styles.email}>${item.price}</Text>
      </View>
      <View style={{top:70}}>
        <AddToCartCounter
          initialCount={item.quantity || 1}
          onChange={newQty => updateQuantity(item.id, newQty)}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default AddToCart;
