import { MMKV } from 'react-native-mmkv';

// follow this article
// https://dev.to/ajmal_hasan/react-native-mmkv-5787
export const storage = new MMKV();

/*
//Encrypted storage
export const storage = new MMKV({
  id: `user-${userId}-storage`, //required: if when either path/encryptionKey exist
  path: `${USER_DIRECTORY}/storage`, //optional: changing storage path
  encryptionKey: 'hunter2' //optional: storing all values encrypted
})
*/

//TO BE USED IN REDUX PERSIST
export const reduxPersistStorage = {
  setItem: (key: string, value: string) : Promise<boolean> => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) : Promise<string | undefined> => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) : Promise<void> => {
    storage.delete(key);
    return Promise.resolve();
  },
};

//HELPER FUNCTIONS TO BE USED THROUGHOUT APP
export const StorageMMKV = {
  setUserPreferences: (key: string, value: string) : void => {
    try {
      storage.set(`${key}`, `${value}`);
    } catch (error) {
      console.error('Error setting user preferences:', error);
    }
  },

  getUserPreferences: (key: string) : string | undefined | null => {
    try {
      return storage.getString(key);
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return null; // Or handle the error according to your application's logic
    }
  },

  removeItem: (key: string) : void => {
    try {
      storage.delete(key);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  },

  clearAll: () : void => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};
