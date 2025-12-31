import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Hasan Ali',
    email: 'hasan@example.com',
    phone: '+91 9191919191',
    avatar: 'https://i.pravatar.cc/150?img=12',
  };

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 600, useNativeDriver: true })
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Profile Header Card */}
        <Animated.View style={[styles.profileHeaderCard, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.avatarWrapper}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.cameraIconBadge}>
              <Text style={{ fontSize: 12 }}>📸</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.nameText}>{user.name}</Text>
          <Text style={styles.infoText}>{user.email}  •  {user.phone}</Text>
          
          <TouchableOpacity 
            style={styles.editProfileBtn}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Account Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionLabel}>Account Settings</Text>
          <View style={styles.card}>
            <MenuItem label="My Orders" subLabel="Manage your purchases" icon="📦" />
            <MenuItem label="Saved Addresses" subLabel="Home, Office, etc." icon="📍" />
            <MenuItem label="Payment Methods" subLabel="Visa **4242" icon="💳" />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionLabel}>Preferences</Text>
          <View style={styles.card}>
            <MenuItem label="Notifications" subLabel="Alerts & Sound" icon="🔔" />
            <MenuItem label="Appearance" subLabel="Light & Dark mode" icon="🌓" />
            <MenuItem label="Language" subLabel="English (US)" icon="🌐" />
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionLabel}>Help & Legal</Text>
          <View style={styles.card}>
            <MenuItem label="Help Center" icon="❓" />
            <MenuItem label="Privacy Policy" icon="🛡️" />
          </View>
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ label, subLabel, icon, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <View style={styles.iconBox}>
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <View>
        <Text style={styles.menuLabel}>{label}</Text>
        {subLabel && <Text style={styles.menuSubLabel}>{subLabel}</Text>}
      </View>
    </View>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

export default ProfileScreen;
