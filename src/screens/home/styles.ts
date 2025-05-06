import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c67c4e',
  },
  list: {
    padding: 20,
    marginVertical: 30,
  },
  item: {
    marginBottom: 20,
    backgroundColor: '#edd6cb',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    top: 10,
  },
  email: {
    fontSize: 14,
    color: 'black',
  },
  image: {
    height: 120,
    width: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },

  plusButton: {
    backgroundColor: '#D17842',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
  h2: {
    left: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
