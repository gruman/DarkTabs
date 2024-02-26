import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from @react-native-async-storage/async-storage
import { onAuthStateChanged, getAuth } from "firebase/auth";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('userGrumanTemplate');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          console.log('Cannot retrieve user');
        }
      } catch (error) {
        console.error('Error retrieving user from AsyncStorage:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, async (userCredential) => {
      if (userCredential) {
        setUser(userCredential);

        try {
          // Persist user authentication state locally using AsyncStorage
          await AsyncStorage.setItem('userGrumanTemplate', JSON.stringify(userCredential));
        } catch (error) {
          console.error('Error storing user in AsyncStorage:', error);
        }
      } else {
        setUser(null);

        try {
          // Remove the user authentication state from local storage
          await AsyncStorage.removeItem('userGrumanTemplate');
        } catch (error) {
          console.error('Error removing user from AsyncStorage:', error);
        }
      }
    });

    loadUserFromStorage(); // Load user from AsyncStorage on component mount

    return () => {
      unsubscribe(); // Clean up the subscription when the component unmounts
    };
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
};

export const useCustomContext = () => useContext(Context);
