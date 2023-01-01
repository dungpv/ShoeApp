import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {ICONS, IMAGES} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {login} from '../../context/users/login/LoginThunk';

export default function Login() {
  const navigation = useNavigation();
  const validSchema = Yup.object().shape({
    email: Yup.string()
      .required('Vui lòng nhập email')
      .matches(
        /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!yahoo\.mail)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/,
        'Sai định dạng và không dùng yahoo.mail',
      ),
    password: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Phải bao gồm chữ hoa, thường, ký tự đặc biệt, và 8 ký tự',
      ),
  });

  const dispatch = useDispatch();

  const signIn = async data => {
    dispatch(login(data)).then(navigation.push('ProductsScreen'));
    // const token = await getLocalStorageByKey(KEY_STORAGE.token);
    // console.log(`Token ${token}`);
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
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.container__button_back}>
              <Image style={styles.image__back} source={ICONS.iconBack} />
            </TouchableOpacity>
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
                  onChangeText={handleChange('email')}
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
                  onChangeText={handleChange('password')}
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
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.button, {backgroundColor: theme.colors.primary}]}>
              <Text style={[styles.button__text, styles.button__text_white]}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <Text>Don’t have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
