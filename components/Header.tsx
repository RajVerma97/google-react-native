import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View, Text } from "react-native";

export default function Header() {
  return (
    <View className="flex justify-between">
      <View>
        <FontAwesome name="joomla" size={28} />
      </View>
      <View>
        <View>
          <FontAwesome name="google" size={24} />
          <Text>Search</Text>
        </View>

        <View>
          <FontAwesome name="star" size={22} />
        </View>
      </View>
      <View>
        <FontAwesome name="user" size={28} />
      </View>
    </View>
  );
}
