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
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderRadius: 8,
    // borderWidth: 2,
    // borderColor: '#c67c4e',
    // paddingHorizontal: 5,
    // paddingVertical: 5,
    // width: 120,
    // alignSelf: 'flex-start',
    // justifyCo;ntent: 'center',
marginHorizontal:60
  },
});
