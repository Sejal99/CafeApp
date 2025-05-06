import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useCartStore} from '../../store/cartStore';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../assets';
import AddToCartCounter from '../../components/AddToCartCounter';
import {useFetchMenu} from '../../store/userStore';
import EmptyCartAnimation from '../../components/EmptyCartAnimation';
import RazorpayCheckout from 'react-native-razorpay';
// import {RAZORPAY_KEY} from './constants';

const AddToCart = () => {
  const {cartItems, removeFromCart, clearCart, updateQuantity} = useCartStore();
  const totalAmount = cartItems
    .filter(item => item.quantity > 0)
    .reduce((total, item) => total + item.price * item.quantity, 0);

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
  const imgURL =
    'https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_UF1000,1000_QL80_.jpg';

  const onPressBuy = () => {
    //Order Api: Call POST api with body like (username, id, price etc) to create an Order and use order_id in below options object
    // const response = await .....

    let options = {
      description: 'Credits towards consultation',
      image: imgURL, //require('../../images.png')
      currency: 'INR', //In USD - only card option will exist rest(like wallet, UPI, EMI etc) will hide
      key: 'rzp_test_J7ZwyhRYL6l1T5',
      amount: '5000',
      name: 'Acme Corp',
      order_id: '', //Replace this with an order_id(response.data.orderId) created using Orders API.
      prefill: {
        email: 'hasan@example.com',
        contact: '9191919191',
        name: 'Hasan',
      }, //if prefill is not provided then on razorpay screen it has to be manually entered.
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        clearCart();
      })
      .catch(error => {
        // handle failure
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
