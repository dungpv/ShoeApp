import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const getCheckout = createAsyncThunk(
  'user/checkoutProduct',
  async params => {
    try {
      const resp = await axios.post(
        API_URL + 'Users/order',
        {
          orderDetail: params.cartData,
          email: params.email,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      );
      const data = await resp.data.statusCode;
      return data;
    } catch (error) {
      // console.error(error)
    }
  },
);
