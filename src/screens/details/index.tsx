import { Image, ScrollView, Text, TouchableOpacity, View, Animated, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Images } from '../../assets';
import { useFavoritesStore } from '../../store/useFavoritesStore';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
  const route = useRoute();
  const { item } = route.params || {};
  const navigation = useNavigation();

  // --- Animation Refs ---
  const fadeAnim = useRef(new Animated.Value(0)).current;      // Overall screen fade
  const floatAnim = useRef(new Animated.Value(0)).current;     // Continuous image floating
  const slideTitle = useRef(new Animated.Value(20)).current;   // Title slide-up
  const slideDesc = useRef(new Animated.Value(20)).current;    // Desc slide-up
  const heartScale = useRef(new Animated.Value(1)).current;    // Heart tap

  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite);
  const isFavorite = useFavoritesStore(state => state.isFavorite(item.id));

  useEffect(() => {
    // 1. Entrance Staggered Animation
    Animated.stagger(150, [
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(slideTitle, { toValue: 0, friction: 8, useNativeDriver: true }),
      Animated.spring(slideDesc, { toValue: 0, friction: 8, useNativeDriver: true }),
    ]).start();

    // 2. Loop Animation: Floating Image
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleToggle = () => {
    Animated.sequence([
      Animated.spring(heartScale, { toValue: 1.5, friction: 4, useNativeDriver: true }),
      Animated.spring(heartScale, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
    toggleFavorite(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIconBg}>
          <Image source={Images.leftIcon} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>Details</Text>
        <TouchableOpacity onPress={handleToggle} style={styles.headerIconBg}>
          <Animated.Image
            source={isFavorite ? Images.redHeart : Images.heart}
            style={[styles.image, { transform: [{ scale: heartScale }] }]}
          />
        </TouchableOpacity>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 140 }}>
        {/* Animated Main Image with Floating Effect */}
        <Animated.View style={{ 
            opacity: fadeAnim,
            transform: [{ translateY: floatAnim }] 
        }}>
          <Image source={{ uri: item.image }} style={styles.imageContainer} />
        </Animated.View>

        {/* Content with Staggered Slide-up */}
        <View style={styles.infoWrapper}>
          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideTitle }] }}>
            <View style={styles.titleContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title ?? item.name}</Text>
                <View style={styles.badgeRow}>
                  {item?.category?.hot && <View style={styles.hotBadge}><Text style={styles.badgeText}>Hot</Text></View>}
                  {item?.category?.cold && <View style={styles.coldBadge}><Text style={styles.badgeText}>Cold</Text></View>}
                </View>
              </View>
              <View style={styles.images}>
                <View style={styles.iconWrapper}><Image source={Images.delivery} style={styles.icon} /></View>
                <View style={styles.iconWrapper}><Image source={Images.coffeeBeans} style={styles.icon} /></View>
              </View>
            </View>
          </Animated.View>

          <View style={styles.line} />
          
          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideDesc }] }}>
            <View style={styles.section}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.descText}>
                {item.description ?? item.ingredients}
              </Text>
            </View>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Persistent Footer */}
      <Animated.View style={[styles.footer, { opacity: fadeAnim }]}>
        <View>
          <Text style={styles.price1}>Price</Text>
          <Text style={styles.price}>${item.price ?? 50}</Text>
        </View>

        <TouchableOpacity style={styles.bottomContainer} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Details;