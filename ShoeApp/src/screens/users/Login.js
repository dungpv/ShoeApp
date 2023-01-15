import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {
  ICONS,
  IMAGES,
  KEY_FIELDS_INPUT,
  KEY_SCREENS,
} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {login} from '../../redux/users/login/LoginThunk';
import Toast from 'react-native-toast-message';

export default function Login() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const validSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter your email')
      .matches(
        /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!yahoo\.mail)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/,
        'Wrong format and do not use yahoo.mail',
      ),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must include uppercase, lowercase, special characters, and 8 characters',
      ),
  });

  const dispatch = useDispatch();

  const signIn = async data => {
    dispatch(login(data))
      .then(setIsLoading(!isLoading))
      .then(
        Toast.show({
          position: 'top',
          topOffset: 60,
          type: 'success',
          text1: 'Login Succeeded',
          visibilityTime: 2000,
        }),
      )
      .then(
        setTimeout(() => {
          navigation.push(KEY_SCREENS.productsScreen);
        }, 1500),
      );
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validSchema}
      onSubmit={values => {
        {
          signIn(values);
        }
      }}>
      {({errors, handleSubmit, handleChange, touched}) => {
        // console.log(errors);
        return (
          <View style={styles.container}>
            {/* <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.container__button_back}>
              <Image style={styles.image__back} source={ICONS.iconBack} />
            </TouchableOpacity> */}
            <Image source={IMAGES.logo} style={styles.logo__image}></Image>
            <Text style={styles.app__header}>Shoes App</Text>
            <Text style={styles.app__slogan__text}>Amazing Application</Text>
            <View style={styles.containerInput}>
              <Text>Email</Text>
              <View style={styles.containerInput__input}>
                <Image
                  style={styles.containerInput__input__img}
                  source={ICONS.iconEmail}
                />
                <TextInput
                  style={styles.containerInput__input__textInput}
                  onChangeText={handleChange(KEY_FIELDS_INPUT.email)}
                />
              </View>
            </View>

            <View style={styles.containerInput}>
              <Text>Password</Text>
              {/* Row */}
              <View style={styles.containerInput__input}>
                <Image
                  style={styles.containerInput__input__img}
                  source={ICONS.iconPassword}
                />
                <TextInput
                  secureTextEntry={true}
                  style={styles.containerInput__input__textInput}
                  onChangeText={handleChange(KEY_FIELDS_INPUT.password)}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity
                onPress={() =>
                  Toast.show({
                    position: 'top',
                    topOffset: 60,
                    type: 'info',
                    text1: 'Functional Upgrading',
                    visibilityTime: 2000,
                  })
                }>
                <Text style={styles.forgot}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.button,
                {
                  backgroundColor: theme.colors.primary,
                },
              ]}>
              <View style={styles.loadingView}>
                {isLoading && (
                  <ActivityIndicator
                    size="large"
                    color={theme.colors.loading}
                    style={styles.loadingButton}
                  />
                )}
                <Text style={[styles.button__text, styles.button__text_white]}>
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.row}>
              <Text>Don’t have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(KEY_SCREENS.registerScreen)}>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
