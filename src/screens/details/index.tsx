import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import {Images} from '../../assets';
import {useFavoritesStore} from '../../store/useFavoritesStore';

const Details = () => {
  const route = useRoute();
  const {item} = route.params || {};
  const navigation = useNavigation();
  const [isToggle, setIsToggle] = useState(false);

  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);
  const isFavorite = useFavoritesStore(state => state.isFavorite(item.id));
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleToggle = () => {
    toggleFavorite(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={Images.leftIcon} style={styles.image} />
        </TouchableOpacity>

        <Text style={styles.text}>Details</Text>
        <TouchableOpacity onPress={handleToggle}>
          <Image
            source={isFavorite ? Images.redHeart : Images.heart}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View>
          <Image source={{uri: item.image}} style={styles.imageContainer} />

          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>{item.title ?? item.name}</Text>
              {item?.category?.hot && (
                <Text style={styles.categoryText}>Hot</Text>
              )}
              {item?.category?.cold && (
                <Text style={styles.categoryText}>Cold</Text>
              )}
            </View>
            <View style={styles.images}>
              <Image source={Images.delivery} style={styles.icon} />
              <Image source={Images.coffeeBeans} style={styles.icon} />
              <Image source={Images.coffeeCup} style={styles.icon} />
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.descText}>
              {item.description ?? item.ingredients}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price1}>Price</Text>
          <Text style={styles.price}>${item.price ?? 50}</Text>

          <TouchableOpacity style={styles.bottomContainer}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
