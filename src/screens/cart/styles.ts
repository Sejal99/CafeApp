import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: '#edd6cb',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    height: 140,
    marginVertical: 20,
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 10,
    marginHorizontal: 10,
  },
  rating: {
    fontSize: 14,
    marginHorizontal: 3,
    alignSelf: 'center',
  },
  email: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 18,
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
    backgroundColor: '#c67c4e',
  },
  textView: {
    flexDirection: 'column',
    gap: 20,
  },
});
