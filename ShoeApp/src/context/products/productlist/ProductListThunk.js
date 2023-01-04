import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const getProduct = createAsyncThunk('product/getProduct', async () => {
  const resp = await axios.get(API_URL + 'api/Product');
  const data = resp.data;

  return data.content;
});
