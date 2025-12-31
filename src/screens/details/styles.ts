import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
  },
  headerIconBg: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    height: 24,
    width: 24,
  },
  text: {
    color: '#2F2D2C',
    fontSize: 18,
    fontWeight: '700',
  },
  imageContainer: {
    height: width - 40,
    width: width - 40,
    alignSelf: 'center',
    borderRadius: 24,
    marginVertical: 20,
    backgroundColor: '#eee',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2F2D2C',
  },
  badgeRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  hotBadge: {
    backgroundColor: '#FFF0ED',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: '#C67C4E',
    fontSize: 12,
    fontWeight: '600',
  },
  images: {
    flexDirection: 'row',
    gap: 12,
  },
  iconWrapper: {
    backgroundColor: '#F9F9F9',
    padding: 8,
    borderRadius: 10,
  },
  icon: {
    height: 24,
    width: 24,
  },
  line: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  section: {
    paddingHorizontal: 20,
  },
  descText: {
    fontSize: 14,
    color: '#a54f4fff',
    lineHeight: 22,
    marginTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  price1: {
    fontSize: 14,
    color: '#9B9B9B',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C67C4E',
    marginTop: 4,
  },
  bottomContainer: {
    backgroundColor: '#C67C4E',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '60%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});