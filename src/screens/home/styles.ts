import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFB', // Clean cream background
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2D2926',
    marginVertical: 15,
    letterSpacing: 0.5,
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginBottom: 20,
    marginHorizontal: 8,
    // Premium Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#800020',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D2926',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
    marginVertical: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#800020',
  },
  addButton: {
    backgroundColor: '#800020',
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '300',
    marginTop: -2,
  },
  counterScale: {
    transform: [{ scale: 0.85 }],
    marginRight: -10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#800020',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  closeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});