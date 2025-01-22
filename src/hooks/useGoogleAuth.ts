import { useState, useEffect } from 'react';
import {
  GoogleSignin,
  isSuccessResponse,
  SignInResponse,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/types/user';

GoogleSignin.configure({
  iosClientId: '294175185450-j5v8hi6mo00qvnj370kaf37hm3oni22q.apps.googleusercontent.com',
  webClientId: '294175185450-eg5b30lkhs7och4n9lgppbm595v2do66.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

export const useGoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        setError(error as Error);
      }
    };

    checkUserSession();
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response: SignInResponse = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        const userData = response.data.user as User;
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      setError(error as Error);
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
      await AsyncStorage.removeItem('user');
    } catch (error) {
      setError(error as Error);
    }
  };

  return {
    user,
    error,
    signInWithGoogle,
    handleLogout,
  };
};
