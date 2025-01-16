import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View, Text } from 'react-native';
import GoogleImage from '../../assets/images/google.svg';
import GoogleGeminiImage from '../../assets/images/google-gemini.svg';

export default function Header() {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <MaterialIcons name="science" size={36} color="white" />
      </View>
      <View className="flex-row rounded-2xl bg-gray-500 p-2 items-center">
        <View className="flex-row items-center mr-2 bg-gray-900 p-2 rounded-xl">
          <GoogleImage width={24} height={24} />
          <Text className="text-white">Search</Text>
        </View>
        <View>
          <GoogleGeminiImage width={24} height={24} />
        </View>
      </View>
      <View>
        <View className="p-2 w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center">
          <Text>A</Text>
        </View>
      </View>
    </View>
  );
}
