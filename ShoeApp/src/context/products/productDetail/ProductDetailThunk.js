import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const getProductDetail = createAsyncThunk(
  'product/getProductById',
  async id => {
    console.log('testing thunk');
    const res = await axios.get(API_URL + `Product/getbyid?id=${id}`);
    const data = res.data;

    console.log(data.content);
    return data.content;
  },
);
