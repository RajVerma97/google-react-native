import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';

export default function GoogleSignIn() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const userInfo = result.user;

      setUser(userInfo);
    } catch (error) {
      console.error('Sign in error: ', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
    } catch (error) {
      setError('Error signing out: ' + error.message);
    }
  };
  return (
    <View>
      {error && <Text className="text-red-500 mb-4">{error}</Text>}
      {user ? (
        <View>
          <Text className="text-white">{JSON.stringify(user)}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text className="text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={signInWithGoogle}>
          <Text className="text-white">google sign in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
