import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';
import {getDataLocalStorageByKey} from '../../../common/LocalStorage';

export const getUserProfile = createAsyncThunk('users/getProfile', async () => {
  const token = await getDataLocalStorageByKey('token');
  const resp = await axios.post(API_URL + 'Users/getProfile', {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = resp.content;
  console.log(data);
  return data;
});
