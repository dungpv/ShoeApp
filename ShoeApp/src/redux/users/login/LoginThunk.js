import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL} from '../../../common/Constant';

export const login = createAsyncThunk('login/signin', async params => {
  let resp = await fetch(API_URL + 'Users/signin', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
  });

  let json = await resp.json();
  let token = json.content.accessToken;
  //console.log(token);
  return json.content.accessToken;
});
