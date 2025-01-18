import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import GoogleImage from '../../assets/images/google.svg';
export default function GoogleSignIn() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    GoogleSignin.configure({
      // webClientId: '294175185450-ek5nm54pm8nv4hgac65u8cs9lds1m4qk.apps.googleusercontent.com',
      iosClientId: 'com.googleusercontent.apps.294175185450-j5v8hi6mo00qvnj370kaf37hm3oni22q',
    });
  }, []);

  const signIn = async () => {
    try {
      console.log('Sign in clicked');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Sign in response:', userInfo);
      setUser(userInfo.user); // Update user state with user info
    } catch (error) {
      console.error('Sign in error:', error);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            Alert.alert('Sign in was cancelled');
            break;
          case statusCodes.IN_PROGRESS:
            Alert.alert('Sign in is already in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Alert.alert('Google Play Services not available or outdated');
            break;
          default:
            Alert.alert('Something went wrong', error.message);
        }
      } else {
        Alert.alert('An unexpected error occurred');
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="bg-blue-500 h-[10rem]">
      <Text>Google Sign-In</Text>
      {user ? (
        <View>
          {/* <Text>Welcome, {user.name}</Text> */}
          {/* <Text>Email: {user.email}</Text> */}
          <TouchableOpacity onPress={signOut}>
            <Text className="text-white">Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}
    </View>
  );
}
