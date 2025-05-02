import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useFavoritesStore} from '../../store/useFavoritesStore';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Favorite = ({navigation}) => {
  const favorites = useFavoritesStore(state => state.favorites);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {item})}
            style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Favorite;
