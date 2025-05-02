import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
  },
  image: {
    height: 30,
    width: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 350,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    marginVertical: 50,
  },
  title: {
    fontSize: 20,
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  images: {
    flexDirection: 'row',
    gap: 10,
    right: 20,
  },
  icon: {
    height: 28,
    width: 28,
  },
  line: {
    borderBottomWidth: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    borderBottomColor: '#c67c4e',
  },
  categoryText: {
    marginHorizontal: 25,
    top: 10,
  },
  descText: {
    alignSelf: 'center',
    marginHorizontal: 22,
    textAlign: 'left',
    marginVertical: 10,
  },
  bottomContainer: {
    backgroundColor: '#c67c4e',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-end',
    bottom: 25,
    width: '60%',
  },
  footer: {
    borderTopLeftRadius: 20,
    padding: 20,
    borderTopRightRadius: 20,
  },
  price: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    top: 20,
    fontSize: 18,
  },
  price1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    top: 10,
    fontSize: 18,
    color: '#c67c4e',
    fontWeight: '600',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
});
