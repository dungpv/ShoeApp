import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {ICONS, IMAGES} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {changePassword} from '../../context/users/changepassword/ChangePasswordThunk';

export default function ChangePassword() {
  const navigation = useNavigation();
  const validSchema = Yup.object().shape({
    password: Yup.string()
      .required('Vui lòng nhập mật khẩu')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Phải bao gồm chữ hoa, thường, ký tự đặc biệt, và 8 ký tự',
      ),
  });

  const dispatch = useDispatch();

  const changePass = data => {
    dispatch(changePassword(data));
    setTimeout(() => navigation.navigate('ProductsScreen'), 1000);
  };

  return (
    <Formik
      initialValues={{
        password: '',
      }}
      validationSchema={validSchema}
      onSubmit={values => {
        changePass(values);
      }}>
      {({errors, handleSubmit, handleChange, touched}) => {
        //console.log(errors);
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
              <Text>Password</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  secureTextEntry={true}
                  style={styles.containerInput__input__textInput}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
              }}>
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: theme.colors.primary}]}
              onPress={handleSubmit}>
              <Text style={[styles.button__text, styles.button__text_white]}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
}
