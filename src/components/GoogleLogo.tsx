import React from 'react';
import { View, Image } from 'react-native';
import GoogleLogoImage from '@assets/images/google-logo.png';
export default function GoogleLogo() {
  return (
    <View className="flex justify-center items-center mt-8 text-center">
      <Image source={GoogleLogoImage} />
    </View>
  );
}
