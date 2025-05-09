import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useCartStore} from '../../store/cartStore';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets';
import AddToCartCounter from '../../components/AddToCartCounter';
import EmptyCartAnimation from '../../components/EmptyCartAnimation';
import RazorpayCheckout from 'react-native-razorpay';

const AddToCart = () => {
  const {cartItems, removeFromCart, clearCart, updateQuantity} = useCartStore();

  const totalAmount = cartItems
    .filter(item => item.quantity > 0)
    .reduce((total, item) => total + (item.price ?? 50) * item.quantity, 0);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.textView}>
          <Text style={styles.name}>{item.title ?? item.name}</Text>

          <View style={styles.ratingRow}>
            <Image source={Images.star} style={styles.starImage} />
            <Text style={styles.rating}>{item?.rating?.rate ?? 4.5}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.email}>${item.price ?? 50}</Text>
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

  const imgURL =
    'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UF1000,1000_QL80_.jpg';

  const onPressBuy = () => {
    let options = {
      description: 'Credits towards consultation',
      image: imgURL,
      currency: 'INR',
      key: '',
      amount: '5000',
      name: 'Acme Corp',
      order_id: '',
      prefill: {
        email: 'hasan@example.com',
        contact: '9191919191',
        name: 'Hasan',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Success: ${data.razorpay_payment_id}`);
        clearCart();
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <EmptyCartAnimation />
      ) : (
        <FlatList
          data={cartItems.filter(item => item.quantity > 0)}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {cartItems.length > 0 && (
        <View style={styles.checkoutBox}>
          <View style={styles.totalBox}>
            <Text style={styles.text}>Total Amount</Text>
            <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressBuy}>
            <Text style={styles.buttonText}>Click To Pay</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AddToCart;
