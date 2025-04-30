import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Images} from '../assets';

const Header = () => {
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

        <View style={styles.cartIcon}>
          <Image source={Images.cartIcon} style={styles.iconImage} />
        </View>
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
    height: 50,
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
    width: 22,
    height: 24,
    marginLeft: 10,
    tintColor: 'white',
  },
});

export default Header;
