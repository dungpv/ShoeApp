import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../../common/Theme';
import styles from './styles/styles';
import {
  API_URL,
  ICONS,
  IMAGES,
  KEY_FIELDS_INPUT,
  KEY_SCREENS,
} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {Field, Formik} from 'formik';
import {editProfile} from '../../redux/users/editprofile/EditProfileThunk';
import RadioForm from 'react-native-simple-radio-button';
import Toast from 'react-native-toast-message';
import {getUserProfile} from '../../redux/users/profile/ProfileThunk';

export default function EditProfile() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  var radio_props = [
    {label: 'Male', value: true},
    {label: 'Female', value: false},
  ];

  const validSchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
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
        'Phải bao gồm chữ hoa, thường, ký tự đặc biệt, và 8 ký tự',
      ),
    phone: Yup.string()
      .required('Please enter your phone')
      .min(10, 'Phone must 10 numbers')
      .max(10, 'Phone is 10 numbers'),
  });
  // const userProfile = useSelector(
  //   state => state.userProfileReducer.userProfile,
  // );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserProfile());
  // }, []);

  const UpdateProfile = data => {
    dispatch(editProfile(data))
      .then(setIsLoading(!isLoading))
      .then(
        Toast.show({
          position: 'top',
          topOffset: 60,
          type: 'success',
          text1: 'Edit Profile Succeeded',
          visibilityTime: 2000,
        }),
      );
    setTimeout(() => navigation.navigate(KEY_SCREENS.productsScreen), 1500);
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
        UpdateProfile(values);
      }}>
      {({errors, handleSubmit, handleChange, setFieldValue, touched}) => {
        //console.log(errors);
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
              <Text>Name</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  style={styles.containerInput__input__textInput}
                  placeholder="Name"
                  onChangeText={handleChange(KEY_FIELDS_INPUT.name)}
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
                  onChangeText={handleChange(KEY_FIELDS_INPUT.phone)}
                />
              </View>
            </View>
            <View style={styles.containerInput}>
              <Text>Email</Text>
              <View style={styles.containerInput__input}>
                <TextInput
                  style={styles.containerInput__input__textInput}
                  placeholder="example@gmail.com"
                  onChangeText={handleChange(KEY_FIELDS_INPUT.email)}
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
                  onChangeText={handleChange(KEY_FIELDS_INPUT.password)}
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
              <View style={styles.loadingView}>
                {isLoading && (
                  <ActivityIndicator
                    size="large"
                    color={theme.colors.loading}
                    style={styles.loadingButton}
                  />
                )}
                <Text style={[styles.button__text, styles.button__text_white]}>
                  UPDATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
}
