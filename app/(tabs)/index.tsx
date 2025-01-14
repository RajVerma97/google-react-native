import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

export default function Tab() {
  return (
    <View>
      <Header />
      <Text className="bg-pink-500">Index</Text>
    </View>
  );
}
