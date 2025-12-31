import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Images} from '../assets';

const {width} = Dimensions.get('window');

const EmptyCartAnimation = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start floating left and right loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 10,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -10,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Bounce-in + pulsing animation
    scaleAnim.setValue(0);
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ),
    ]).start();
  }, [moveAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops!</Text>
      <Text style={styles.subtitle}>Your Cart is Empty</Text>

      <Animated.Image
        source={Images.emptyCart}
        style={[
          styles.image,
          {
            transform: [{translateX: moveAnim}, {scale: scaleAnim}],
          },
        ]}
        resizeMode="contain"
      />
      <Text style={styles.hint}>Start adding delicious items now 🍕☕</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800020',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 12,
    color: '#333',
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
  },
  hint: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});

export default EmptyCartAnimation;
