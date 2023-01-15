import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const signUp = createAsyncThunk('users/signUp', async params => {
  const resp = await axios.post(API_URL + 'Users/signup', params, {
    headers: {
      'content-type': 'application/json',
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
});
