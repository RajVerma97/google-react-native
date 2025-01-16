import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View, Text, Image } from 'react-native';
import GoogleImage from '../../assets/images/google.svg';

export default function Header() {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <MaterialIcons name="science" size={28} />
      </View>
      <View className="flex-row items-center">
        <View className="flex-row items-center">
          <Image source={GoogleImage} />
          <Text>Search</Text>
        </View>
        <View>
          <MaterialIcons name="star" size={22} />
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
