import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddToCartCounter = ({initialCount = 0, onChange}) => {
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
    <View style={styles.container}>
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
    borderWidth: 2,
    borderColor: '#c67c4e',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // alignSelf: 'flex-start',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#800020',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  countText: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: '500',
  },
});
