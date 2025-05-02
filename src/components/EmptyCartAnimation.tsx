import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Images} from '../assets';

const EmptyCartAnimation = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [moveAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Cart Is Empty</Text>
      <Animated.Image
        source={Images.emptyCart}
        style={[styles.image, {transform: [{translateX: moveAnim}]}]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#800020',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default EmptyCartAnimation;
