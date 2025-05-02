import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useCartStore} from '../../store/cartStore';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets';
import AddToCartCounter from '../../components/AddToCartCounter';
import {useFetchMenu} from '../../store/userStore';
import EmptyCartAnimation from '../../components/EmptyCartAnimation';

const AddToCart = () => {
  const {cartItems, removeFromCart, clearCart, updateQuantity} = useCartStore();
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  const renderItem = ({item}: {item: any}) => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
    const quantity = cartItem?.quantity || 0;
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textView}>
          <Text style={styles.name}>{item.title}</Text>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              alignItems: 'center',
            }}>
            <Image source={Images.star} style={{height: 20, width: 20}} />
            <Text style={styles.rating}>{item?.rating?.rate}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.email}>${item.price}</Text>
            <AddToCartCounter
              initialCount={item.quantity}
              onChange={newQty => {
                if (newQty === 0) {
                  removeFromCart(item.id);
                } else {
                  updateQuantity(item.id, newQty);
                }
              }}
              containerStyle={styles.box}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <EmptyCartAnimation />
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {cartItems.length > 0 && (
        <>
          <View style={styles.totalBox}>
            <Text style={styles.text}>Total Amount</Text>
            <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click To Pay</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default AddToCart;
