import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
      webClientId: '294175185450-ek5nm54pm8nv4hgac65u8cs9lds1m4qk.apps.googleusercontent.com',
      iosClientId: 'com.googleusercontent.apps.294175185450-j5v8hi6mo00qvnj370kaf37hm3oni22q',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();

      if (isSuccessResponse(response)) {
        console.log(response.data);
        //setUser(response.data);
      } else {
        // sign in cancelled by the user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // sign in already ni progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // android only play services not available
            break;

          default:
          //some other error
        }
      } else {
        //an error that's not related togoogle sign in
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

      <TouchableOpacity onPress={signIn}>
        <GoogleImage width={28} height={28} />
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      {/* <GoogleSigninButton */}
      {/*   size={GoogleSigninButton.Size.Wide} */}
      {/*   color={GoogleSigninButton.Color.Dark} */}
      {/*   onPress={signIn} */}
      {/* /> */}
    </View>
  );
}
