import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB', // Modern soft grey
  },
  profileHeaderCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 25,
    borderRadius: 24,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    // Shadow for Android
    elevation: 5,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FDF5F0',
  },
  cameraIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#C67C4E',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  infoText: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  editProfileBtn: {
    marginTop: 15,
    backgroundColor: '#FDF5F0',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 12,
  },
  editBtnText: {
    color: '#C67C4E',
    fontWeight: '700',
    fontSize: 14,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#BCBCBC',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
    marginLeft: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  menuSubLabel: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: '#CCC',
    fontWeight: '300',
  },
  logoutBtn: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#FFF1F1',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },
  logoutBtnText: {
    color: '#FF5252',
    fontWeight: '700',
    fontSize: 16,
  },
});
