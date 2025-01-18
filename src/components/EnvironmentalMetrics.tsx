import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { View, Text } from 'react-native';

type Metric = {
  title: string;
  value: string;
  icon: React.ReactElement;
};

type Metrics = Array<Metric>;
export default function EnvironmentalMetrics() {
  const metrics: Metrics = [
    {
      title: 'Gurugram',
      value: '30',
      icon: <MaterialIcons name="shield-moon" size={24} color={'#FFFFFF'} />,
    },
    {
      title: 'Air Quality',
      value: '170',
      icon: <MaterialIcons name="waves" size={24} color={'#FDFF00'} />,
    },
    {
      title: 'Humidity',
      value: '30',
      icon: <MaterialIcons name="water-drop" size={24} color={'#4D6BFE'} />,
    },
  ];
  return (
    <View className="flex flex-row justify-between items-center">
      {metrics?.map((metric: Metric, index) => (
        <View key={index} className="p-4 border rounded-2xl border-gray-600">
          <View>
            <Text className="text-white font-inter">{metric.title}</Text>
          </View>
          <View className="flex flex-row justify-between items-center mt-4">
            <Text className="text-white font-roboto font-medium text-xl">{metric.value}</Text>
            <View>{metric.icon}</View>
          </View>
        </View>
      ))}
    </View>
  );
}
