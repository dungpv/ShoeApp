import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const getProductFavorite = createAsyncThunk(
  'users/getProductFavorite',
  async token => {
    const res = await axios.get(API_URL + 'Users/getproductfavorite', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.data;

    return data.content.productsFavorite;
  },
);

export const likeProducts = createAsyncThunk(
  'users/getLikeProduct',
  async (id, token) => {
    const res = await axios.get(API_URL + `Users/like?productId=${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.data;

    return data.content;
  },
);

export const unLikeProducts = createAsyncThunk(
  'users/getUnLikeProduct',
  async (id, token) => {
    const res = await axios.get(API_URL + `Users/unlike?productId=${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.data;

    return data.content;
  },
);
