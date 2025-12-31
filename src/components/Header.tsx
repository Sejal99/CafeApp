import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../assets';
import {useNavigation} from '@react-navigation/native';

const rotatingPlaceholders = [
  'Search for coffee',
  'Search for latte',
  'Search for espresso',
  'Search for mocha',
  'Search for cappuccino',
];

const Header = ({
  searchText,
  onChangeSearch,
  onLocationPress,
  locationName,
}: {
  searchText: string;
  onChangeSearch: (text: string) => void;
  onLocationPress: () => void;
  locationName: string;
}) => {
  const navigation = useNavigation();
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % rotatingPlaceholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGoToCart = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <TouchableOpacity onPress={onLocationPress}>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.name}>
                {locationName || 'Select Location'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.cartIcon} onPress={handleGoToCart}>
          <Image source={Images.user} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={Images.searchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder={rotatingPlaceholders[placeholderIndex]}
          style={styles.searchInput}
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={onChangeSearch}
        />
      </View>
      <View style={styles.overlayBox}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Promo</Text>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Buy one get</Text>
            <Text style={styles.textStyle}> one FREE</Text>
          </View>
        </View>
        <Image source={Images.coffee} style={styles.coffeeImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#451800',
  },
  textView: {
    alignItems: 'center',
    marginHorizontal: 10,
    top: 10,
  },
  textStyle: {
    left: 20,
    fontSize: 20,
    fontWeight: 600,
    color: '#80461B',
  },
  overlayBox: {
    position: 'absolute',
    top: 230,
    alignSelf: 'center',
    height: 100,
    width: 300,
    backgroundColor: '#F2D2BD',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // zIndex: 1,
  },
  coffeeImage: {
    width: 110,
    height: 102,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    backgroundColor: 'red',
    color: 'white',
    width: 50,
    textAlign: 'center',
    borderRadius: 3,
    right: 10,
  },
  textContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  map: {
    height: 300,
    width: '100%',
    marginTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 150,
    bottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  // text: {
  //   flexDirection: 'column',
  // },
  location: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 4,
  },
  cartIcon: {
    flexDirection: 'row',
    marginRight: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    tintColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 10,
    paddingHorizontal: 10,
    elevation: 2,
    bottom: 70,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#000',
  },
});

export default Header;
