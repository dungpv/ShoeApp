import {StyleSheet} from 'react-native';
import {theme} from '../../../../common/Theme';

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 0,
    alignSelf: 'stretch',
  },
  containerItem: {
    width: 370,
    height: 270,
    backgroundColor: 'white',
    borderRadius: 18,
    margin: 20,
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    height: '100%',
    width: '50%',
  },
  textImageWrap: {
    marginLeft: 8,
    marginTop: 10,
    width: '50%',
    flex: 1,
    justifyContent: 'space-between',
  },
  textImageName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  textImagePrice: {
    color: theme.colors.orange,
    fontSize: 16,
    fontWeight: '700',
  },
  icon: {
    width: 28,
    height: 28,
  },
  addToCart: {
    padding: 10,
    backgroundColor: '#4f3ce6',
    width: 100,
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default styles;
