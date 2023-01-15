import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';
import {getDataLocalStorageByKey} from '../../../common/LocalStorage';

export const changePassword = createAsyncThunk(
  'users/changePassword',
  async params => {
    const token = await getDataLocalStorageByKey('token');
    const resp = await axios.post(API_URL + 'Users/changePassword', params, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        newPassword: params.password,
      }),
    });

    const data = resp.data;

    return data;
  },
);
