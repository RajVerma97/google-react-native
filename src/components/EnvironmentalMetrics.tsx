import React from 'react';
import { View, Text } from 'react-native';
import { metrics } from '../data/environmental-metrics';
import { Metric } from '@/types/environmental-metrics';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EnvironmentalMetrics() {
  return (
    <View className="flex flex-row justify-between items-center">
      {metrics?.map((metric: Metric, index: number) => (
        <View key={index} className="p-4 border rounded-2xl border-gray-600">
          <View>
            <Text className="text-white font-inter">{metric.title}</Text>
          </View>
          <View className="flex flex-row justify-between items-center mt-4">
            <Text className="text-white font-inter font-medium text-xl">{metric.value}</Text>
            <MaterialIcons name={metric.iconName} size={24} color={metric.iconColor} />
          </View>
        </View>
      ))}
    </View>
  );
}
