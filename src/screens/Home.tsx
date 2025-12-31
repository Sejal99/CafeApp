import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useCounterStore} from '../store/useCounterStore';

const CounterScreen = () => {
  const {count, increment, decrement, reset} = useCounterStore();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
});
