import {Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const {item} = route.params || {};
  console.log('item', item);

  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

export default Details;
