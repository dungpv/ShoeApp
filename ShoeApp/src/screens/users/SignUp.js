import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {ICONS, IMAGES} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {Field, Formik} from 'formik';
import {signUp} from '../../context/users/signup/SignUpThunk';
import RadioForm from 'react-native-simple-radio-button';

export default function SignUp() {
  const navigation = useNavigation();
  var radio_props = [
    {label: 'Male', value: true},
    {label: 'Female', value: false},
  ];

  const validSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập Tên'),
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
    phone: Yup.string()
      .required('Vui lòng nhập số điện thoại')
      .min(10, 'Số điện thoại phải là 10 số')
      .max(10, 'Số điện thoại là 10 số'),
  });

  const dispatch = useDispatch();

  const Register = data => {
    dispatch(signUp(data));
    setTimeout(() => navigation.navigate('LoginScreen'), 1000);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: true,
      }}
      validationSchema={validSchema}
      onSubmit={values => {
        Register(values);
      }}>
      {({errors, handleSubmit, handleChange, setFieldValue, touched}) => {
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
              <Text>Name</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  style={styles.containerInput__input__textInput}
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                marginVertical: 12,
                marginTop: 16,
              }}>
              <Text>Gender</Text>
              <RadioForm
                style={{
                  marginTop: 10,
                }}
                radio_props={radio_props}
                initial={true}
                formHorizontal={true}
                labelHorizontal={true}
                buttonColor={theme.colors.secondary}
                labelColor={theme.colors.secondary}
                animation={true}
                buttonSize={15}
                buttonOuterSize={20}
                labelStyle={{marginRight: 10, fontSize: 15}}
                onPress={value => {
                  setFieldValue('gender', value);
                }}
              />
            </View>
            <View style={styles.containerInput}>
              <Text>Phone</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  style={styles.containerInput__input__textInput}
                  placeholder="Phone"
                  onChangeText={handleChange('phone')}
                />
              </View>
            </View>
            <View style={styles.containerInput}>
              <Text>Email</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  style={styles.containerInput__input__textInput}
                  placeholder="example@gmail.com"
                  onChangeText={handleChange('email')}
                />
              </View>
            </View>

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
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              {errors.phone && touched.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: theme.colors.primary}]}
              onPress={handleSubmit}>
              <Text style={[styles.button__text, styles.button__text_white]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
