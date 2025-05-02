import React from 'react';
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

const Header = ({
  searchText,
  onChangeSearch,
}: {
  searchText: string;
  onChangeSearch: (text: string) => void;
}) => {
  const navigation = useNavigation();
  const handleGoToCart = () => {
    navigation.navigate('AddToCart');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <View style={styles.text}>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.name}>......</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.cartIcon} onPress={handleGoToCart}>
          <Image source={Images.user} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image source={Images.searchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={onChangeSearch}
        />

        {/* <Image source={Images.filterIcon} style={styles.filterIcon} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#451800',
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
  text: {
    flexDirection: 'column',
  },
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
    fontSize: 16,
    color: '#000',
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});

export default Header;
