import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#c67c4e',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    top: 10,
    color: 'white',
    height: 40,
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
  image: {
    height: 170,
    width: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
  plusButton: {
    backgroundColor: '#F2D2BD',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
    paddingTop: 20,
  },
  text: {
    color: '#800020',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  heading: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  h1: {
    alignSelf: 'flex-end',
    left: 20,
    height:50
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F2D2BD',
  },
});
