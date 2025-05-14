import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const ProfileScreen = ({navigation}) => {
  const user = {
    name: 'Hasan Ali',
    email: 'hasan@example.com',
    phone: '+91 9191919191',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.phone}>{user.phone}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <MenuItem
            label="My Orders"
            icon="receipt-outline"
            onPress={() => navigation.navigate('OrderHistory')}
          />
          <Icon name="home-outline" size={30} color="#000" />
          <MenuItem
            label="Saved Addresses"
            icon="location-outline"
            onPress={() => navigation.navigate('SavedAddresses')}
          />
          <MenuItem
            label="Payment Methods"
            icon="card-outline"
            onPress={() => navigation.navigate('PaymentMethods')}
          />
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <MenuItem label="Notifications" icon="notifications-outline" onPress={undefined} />
          <MenuItem label="Language" icon="globe-outline" />
          <MenuItem label="Theme" icon="moon-outline" />
        </View> 


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <MenuItem label="Help Center" icon="help-circle-outline" />
          <MenuItem label="Privacy Policy" icon="shield-checkmark-outline" />
          <MenuItem label="Terms of Use" icon="document-text-outline" />
        </View>

        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.logoutButton}>
            <Icon name="log-out-outline" size={20} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({label, icon, onPress}) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.itemRow}>
      <Icon name={icon} size={22} color="#555" />
      <Text style={styles.itemText}>{label}</Text>
    </View>
    <Icon name="chevron-forward" size={20} color="#999" />
  </TouchableOpacity>
);

export default ProfileScreen;
