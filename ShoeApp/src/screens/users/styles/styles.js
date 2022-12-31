import {StyleSheet} from 'react-native';
import {theme} from '../../../common/Theme';

export default styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo__image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  app__header: {
    fontSize: 22,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  app__slogan__text: {
    fontSize: 16,
    color: theme.colors.secondary,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  button__signup: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: theme.colors.secondary,
  },
  button__text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  button__text_white: {
    color: 'white',
  },
  button__text_purple: {
    color: theme.colors.primary,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container__button_back: {
    position: 'absolute',
    top: 20,
    left: 4,
  },
  image__back: {
    width: 24,
    height: 24,
  },

  containerInput: {
    width: '100%',
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginTop: 16,
  },
  containerInput__input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInput__input__img: {
    width: 24,
    height: 24,
  },
  containerInput__input__textInput: {
    flex: 1,
    padding: 8,
  },
  error: {
    color: 'red',
  },
});
