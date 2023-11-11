import { useEffect, useReducer, useCallback } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAsyncState(initialValue = [true, undefined]) {
  return useReducer(
    (state, action = null) => [false, action],
    initialValue
  );
}

export async function setStorageItemAsync(key, value) {
  if (Platform.OS === 'web') {
    // Web platform logic remains the same
  } else {
    if (value == null) {
      await AsyncStorage.removeItem(key);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  }
}

export function useStorageState(key) {
  const [state, setState] = useAsyncState();

  // Get
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Web platform logic remains the same
    } else {
      AsyncStorage.getItem(key).then(value => {
        setState(value);
      });
    }
  }, [key]);

  // Set
  const setValue = useCallback(
    (value) => {
      setStorageItemAsync(key, value).then(() => {
        setState(value);
      });
    },
    [key]
  );

  return [state, setValue];
}
