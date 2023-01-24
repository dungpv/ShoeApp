import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../../common/Constant';

export const getProduct = createAsyncThunk('product/getProduct', async () => {
  const resp = await axios.get(API_URL + 'Product');
  const data = resp.data;
  return data.content;
});

export const getAllCategory = createAsyncThunk(
  'category/getAllCategory',
  async () => {
    const resp = await axios.get(API_URL + 'Product/getAllCategory');
    const data = resp.data;
    let obj = [
      {
        id: 'ALL',
        category: 'ALL',
        categoryParent: '[]',
        categoryChild: '[]',
        deleted: false,
        productList: '[]',
        alias: 'all',
      },
      ...data.content,
    ];
    return obj;
  },
);

export const getProductByCategoryId = createAsyncThunk(
  'product/getProductByCategoryId',
  async idCategory => {
    const resp = await axios.get(
      idCategory === 'ALL'
        ? API_URL + 'Product'
        : API_URL + `Product/getProductByCategory?categoryId=${idCategory}`,
    );
    const data = resp.data;
    return data.content;
  },
);
