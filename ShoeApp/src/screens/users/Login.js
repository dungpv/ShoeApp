import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {login} from '../../context/users/LoginThunk';
import * as Yup from 'yup';
import {getLocalStorageByKey} from '../../common/LocalStorage';
import {KEY_SCREENS, KEY_STORAGE} from '../../common/Constant';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const validSchema = Yup.object().shape({
    email: Yup.string().required('Please Enter your email'),
    password: Yup.string().required('Please Enter your password'),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    // ),
  });

  const dispatch = useDispatch();
  //const navigation = useNavigation();

  const signIn = async data => {
    //dispatch(login(data)).then(navigation.push(KEY_SCREENS.profile));
    // const token = await getLocalStorageByKey(KEY_STORAGE.token);
    // console.log(`Token ${token}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.header__title}>Register Now</Text>
      </View>
      {/* End Header */}

      {/* Body */}
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
        {({errors, handleSubmit, handleChange}) => {
          console.log(errors);
          return (
            <View style={styles.body}>
              <View>
                {/* Column */}
                <View style={styles.containerInput}>
                  <Text>Email</Text>
                  {/* Row */}
                  <View style={styles.containerInput__input}>
                    <Image
                      style={styles.containerInput__input__img}
                      source={require('../../assets/email.png')}
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
                      source={require('../../assets/password.png')}
                    />
                    <TextInput
                      secureTextEntry={true}
                      style={styles.containerInput__input__textInput}
                      onChangeText={handleChange('password')}
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.btn, styles.btn_primary]}
                onPress={handleSubmit}>
                <Text style={[styles.btn__text, styles.btn__text_white]}>
                  SIGN IN
                </Text>
              </TouchableOpacity>

              <View style={[styles.btn, styles.btn_secondary]}>
                <Text style={[styles.btn__text, styles.btn__text_green]}>
                  SIGN UP
                </Text>
              </View>
            </View>
          );
        }}
      </Formik>
      {/* End Body  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 30,
    paddingBottom: 30,
  },
  header__title: {
    color: 'white', //Màu
    fontSize: 30, //Kích thước
    fontWeight: '500', //Đậm, nhạt
  },
  body: {
    flex: 3,
    backgroundColor: 'white', //Màu background
    borderTopLeftRadius: 30, //Bo góc trái
    borderTopRightRadius: 30, //Bo góc phải
    padding: 30,
  },
  containerInput: {
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

  btn: {
    height: 42,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 18,
  },
  btn_primary: {
    backgroundColor: '#009387',
  },
  btn_secondary: {
    borderColor: '#009387',
    borderWidth: 1,
  },

  btn__text: {
    fontSize: 16,
  },

  btn__text_white: {
    color: 'white',
  },

  btn__text_green: {
    color: '#009387',
  },
});
