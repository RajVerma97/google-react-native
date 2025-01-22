import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import GoogleImage from '../../assets/images/google.svg';
import GoogleGeminiImage from '../../assets/images/google-gemini.svg';
import BeakerImage from '../../assets/images/beaker.png';
import useBottomSheet from '@/hooks/useBottomSheet';
import BottomSheet from './BottomSheet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';

export default function Header() {
  const { user } = useGoogleAuth();

  const { isVisible, showBottomSheet, hideBottomSheet, translateY } = useBottomSheet();
  return (
    <View className="flex-row justify-between items-center">
      <View style={{ width: 36, height: 36 }}>
        <Image source={BeakerImage} style={{ width: '100%', height: '100%' }} />
      </View>
      <View className="flex-row rounded-2xl bg-gray-500 p-2 items-center">
        <View className="flex-row items-center mr-4 bg-gray-900 p-2 rounded-xl">
          <GoogleImage width={24} height={24} />
          <Text className="text-white font-inter ml-1">Search</Text>
        </View>
        <View>
          <GoogleGeminiImage width={24} height={24} />
        </View>
      </View>
      <View>
        {user ? (
          <TouchableOpacity
            onPress={showBottomSheet}
            className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center"
          >
            {user.photoURL ? (
              <Image
                source={{ uri: user.photoURL }}
                style={{ width: '100%', height: '100%' }}
                className="rounded-full"
              />
            ) : (
              <MaterialIcons name="account-circle" color="white" size={28} />
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={showBottomSheet}
            className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center"
          >
            <MaterialIcons name="account-circle" color="white" size={28} />
          </TouchableOpacity>
        )}
      </View>
      <BottomSheet
        isVisible={isVisible}
        hideBottomSheet={hideBottomSheet}
        translateY={translateY}
      />
    </View>
  );
}
