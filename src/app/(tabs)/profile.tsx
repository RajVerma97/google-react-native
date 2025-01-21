import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="p-8 bg-[#1F2125] flex-1">
        <Text className="text-white  ">Profile</Text>
      </View>
    </SafeAreaView>
  );
}
