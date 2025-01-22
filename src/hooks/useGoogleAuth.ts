import { useState } from 'react';
import { GoogleSignin, isSuccessResponse } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  iosClientId: '294175185450-j5v8hi6mo00qvnj370kaf37hm3oni22q.apps.googleusercontent.com',
  webClientId: '294175185450-eg5b30lkhs7och4n9lgppbm595v2do66.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

export const useGoogleAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUser(response.data);
      }
    } catch (error) {
      setError(error as Error);
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
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
