import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 20,
    color: '#800020',
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
  card: {
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
  price: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#800020',
  },
  favContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 200,
  },
});
