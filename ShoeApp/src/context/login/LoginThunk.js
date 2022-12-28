import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk('login/signin', async params => {
  let resp = await fetch('https://shop.cyberlearn.vn/api/Users/signin', {
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
  return json.content.accessToken;
});
