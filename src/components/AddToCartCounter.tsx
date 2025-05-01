import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddToCartCounter = ({initialCount = 0, onChange, containerStyle}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange?.(newCount);
  };

  const decrement = () => {
    const newCount = Math.max(count - 1, 0);
    setCount(newCount);
    onChange?.(newCount);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>–</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>{count}</Text>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCartCounter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 120,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#D27D2D',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  countText: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: '500',
  },
});
