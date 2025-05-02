import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: '#c67c4e',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    height: 140,
    marginVertical: 10,
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 10,
    marginHorizontal: 10,
    color: 'white',
  },
  rating: {
    fontSize: 14,
    marginHorizontal: 3,
    alignSelf: 'center',
    color: 'white',
  },
  email: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
  },
  textView: {
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    color: '#800020',
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  box: {
    marginHorizontal: 60,
  },
  emptyCartImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalBox: {
    padding: 16,
    backgroundColor: '#c67c4e',
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#9A2A2A',
    padding: 20,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  checkoutBox: {
    flexDirection: 'row',
    backgroundColor: '#c67c4e',
    justifyContent: 'space-between',
    top: 35,
  },
});
