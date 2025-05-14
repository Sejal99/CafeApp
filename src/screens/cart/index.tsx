import {View, Text, FlatList, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useCartStore} from '../../store/cartStore';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets';
import AddToCartCounter from '../../components/AddToCartCounter';
import EmptyCartAnimation from '../../components/EmptyCartAnimation';
import RazorpayCheckout from 'react-native-razorpay';

const DEFAULT_IMAGE = 'https://via.placeholder.com/100';

const AddToCart = () => {
  const {cartItems, removeFromCart, clearCart, updateQuantity} = useCartStore();

  const validCartItems = cartItems.filter(item => item?.quantity > 0 && item?.id != null);

  const totalAmount = validCartItems.reduce((total, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 50;
    const itemQty = typeof item.quantity === 'number' ? item.quantity : 0;
    return total + itemPrice * itemQty;
  }, 0);

  const renderItem = ({item}: {item: any}) => {
    const imageSource = item.image ? {uri: item.image} : {uri: DEFAULT_IMAGE};

    return (
      <View style={styles.item}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        <View style={styles.textView}>
          <Text style={styles.name}>{item.title || item.name || 'Unnamed Item'}</Text>

          <View style={styles.ratingRow}>
            <Image source={Images.star} style={styles.starImage} />
            <Text style={styles.rating}>{item?.rating?.rate ?? '4.5'}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.email}>${item.price ?? 50}</Text>
            <AddToCartCounter
              initialCount={item.quantity}
              onChange={newQty => {
                if (!item.id) return;
                if (newQty === 0) {
                  removeFromCart(item.id, item.source); 
                } else {
                  updateQuantity(item.id, newQty, item.source);
                }
              }}
              containerStyle={styles.box}
            />
          </View>
        </View>
      </View>
    );
  };

  const onPressBuy = () => {
    if (!totalAmount || totalAmount <= 0) {
      Alert.alert('Cart Error', 'Total amount must be greater than 0 to proceed.');
      return;
    }

    if (validCartItems.length === 0) {
      Alert.alert('Cart Error', 'No valid items to purchase.');
      return;
    }

    const options = {
      description: 'Credits towards consultation',
      image: 'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UF1000,1000_QL80_.jpg',
      currency: 'INR',
      key: '', // <- Make sure to set your Razorpay Key here
      amount: (totalAmount * 100).toFixed(0), // in paise
      name: 'CafeNest',
      order_id: '',
      prefill: {
        email: 'hasan@example.com',
        contact: '9191919191',
        name: 'Hasan',
      },
      theme: {color: '#53a20e'},
    };

    if (!options.key) {
      Alert.alert('Payment Error', 'Razorpay key is missing.');
      return;
    }

    RazorpayCheckout.open(options)
      .then(data => {
        Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
        clearCart();
      })
      .catch(error => {
        Alert.alert('Payment Failed', `Code: ${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your Cart</Text>
      {validCartItems.length === 0 ? (
        <EmptyCartAnimation />
      ) : (
        <FlatList
          data={validCartItems}
          keyExtractor={(item, index) => item?.id?.toString() ?? `cart-${index}`}
          renderItem={renderItem}
        />
      )}
      {validCartItems.length > 0 && (
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
