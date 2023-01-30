import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';
import {getDataLocalStorageByKey} from '../../../common/LocalStorage';

export const editProfile = createAsyncThunk(
  'users/updateProfile',
  async params => {
    const token = await getDataLocalStorageByKey('token');
    console.log('token', token);
    const resp = await axios.post(API_URL + 'Users/updateProfile', params, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: params.email,
        password: params.password,
        name: params.name,
        gender: params.gender,
        phone: params.phone,
      }),
    });

    const data = resp.data;

    return data;
  },
);
