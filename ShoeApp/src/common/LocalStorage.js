import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ExpiredTime} from './Constant';

export const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 10,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: ExpiredTime,

  // cache data in the memory. default is true.
  enableCache: true,
});

export const saveStorage = (keyName, data) => {
  storage.save({
    key: keyName,
    data: data,
  });
};

export const getLocalStorageByKey = async keyName => {
  try {
    const data = await storage.load({
      key: keyName,
      autoSync: true,
      syncInBackground: true,
    });
    return data;
  } catch (error) {
    return '';
  }
};

export const removeLocalStorageByKey = async keyName => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (error) {
    return '';
  }
  console.log('remove token');
};
