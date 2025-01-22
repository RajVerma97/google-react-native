import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { View, Modal, TouchableOpacity, Animated, Text, Image, Platform } from 'react-native';
import HorizontalDivider from '@components/HorizontalDivider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GoogleLogo from '../../assets/images/google-logo.png';
import { SETTINGS } from '@/data/bottomsheet';
import { SettingItem } from '@/types/bottomsheet';
import { auth as FAuth } from '@utils/firebase';
import { GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import useUser from '@/hooks/useUser';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type BottomSheetProps = {
  isVisible: boolean;
  hideBottomSheet: () => void;
  translateY: Animated.Value;
};

GoogleSignin.configure({
  iosClientId: '294175185450-j5v8hi6mo00qvnj370kaf37hm3oni22q.apps.googleusercontent.com',
  webClientId: '294175185450-eg5b30lkhs7och4n9lgppbm595v2do66.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

export default function BottomSheet({ isVisible, hideBottomSheet, translateY }: BottomSheetProps) {
  // const { user } = useUser();
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [, setError] = useState<string | null>(null);

  const handleContentPress = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    setLoggedIn(false);
    // setEmail('');
    // setPassword('');
  };

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (user) setLoggedIn(true);
    else setLoggedIn(false);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const signInWithGoogle = async () => {
    try {
      setError(null);

      // if (Platform.OS === 'web') {
      //   // Use existing web flow
      //   const provider = new GoogleAuthProvider();
      //   await signInWithPopup(FAuth, provider);
      // } else {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const googleSignInResult = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(googleSignInResult.data?.idToken);

      // Sign-in the user with the credential
      return await auth().signInWithCredential(googleCredential);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setError(errorMessage);
    }
  };
  // const handleLogout = async () => {
  //   try {
  //     setError(null);
  //     await signOut(FAuth);
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'logout failed';
  //     setError('Error signing out: ' + errorMessage);
  //   }
  // };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={hideBottomSheet}
      style={{ flex: 1 }}
    >
      <TouchableOpacity
        className="flex-1 bg-black/50"
        activeOpacity={1}
        onPress={hideBottomSheet}
        style={{ flex: 1 }}
      >
        <Animated.View
          style={{ transform: [{ translateY }], flex: 1 }}
          className="absolute bottom-0 w-full"
        >
          <TouchableOpacity activeOpacity={1} onPress={handleContentPress} style={{ flex: 1 }}>
            <View
              className="flex-1 bg-[#2E3034] py-3 px-4 rounded-3xl min-h-screen"
              style={{ flex: 1 }}
            >
              <View className="flex-row justify-between items-center  p-3">
                <TouchableOpacity onPress={hideBottomSheet} className="self-start">
                  <MaterialIcons name="close" color="white" size={28} />
                </TouchableOpacity>
                <View className="w-20 h-12">
                  <Image
                    source={GoogleLogo}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ width: 28 }} />
              </View>
              <View className="flex flex-row justify-between">
                <View className="flex flex-row">
                  {user ? (
                    <View className="flex flex-row items-center">
                      <TouchableOpacity className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center">
                        {/* {user.photoURL ? (
                          <Image
                            source={{ uri: user.photoURL }}
                            style={{ width: '100%', height: '100%' }}
                            className="rounded-full"
                          />
                        ) : (
                          <MaterialIcons name="account-circle" color="white" size={28} />
                        )} */}
                      </TouchableOpacity>
                      <View className="ml-2">
                        {/* <Text className="text-white font-inter text-xl"> {user.displayName}</Text>
                        <Text className="text-white font-inter mt-1 text-md">{user.email}</Text> */}

                        <TouchableOpacity className="ml-2 mt-2" onPress={handleLogout}>
                          <Text className="text-red-500 font-inter text-lg">Logout</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View className="flex flex-row items-center">
                      <TouchableOpacity className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center">
                        <MaterialIcons name="account-circle" color="white" size={28} />
                      </TouchableOpacity>
                      <TouchableOpacity className="ml-2" onPress={signInWithGoogle}>
                        <Text className="text-blue-500 font-inter text-lg">Add Account</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="arrow-drop-down-circle" color="white" size={36} />
                </TouchableOpacity>
              </View>

              <View className="mt-4">
                <TouchableOpacity className="border rounded-full px-4 py-2  self-center justify-between items-center border-gray-400">
                  <Text className=" text-white text-lg font-inter font-medium">
                    Manage Your Google Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2">
                {SETTINGS?.map((settingItem: SettingItem, index) => (
                  <View key={index} style={{ flex: 1 }}>
                    <TouchableOpacity className="flex flex-row items-center">
                      <MaterialIcons name={settingItem.iconName} color="white" size={28} />
                      <Text className="w-5/6 text-white font-inter  capitalize ml-4">
                        {settingItem.text}
                      </Text>
                    </TouchableOpacity>
                    <HorizontalDivider />
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}
