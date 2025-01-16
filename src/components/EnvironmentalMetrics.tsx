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
      title: 'Air Quality:170',
      value: 'Moderate',
      icon: <MaterialIcons name="waves" size={24} color={'#FDFF00'} />,
    },
    {
      title: 'Humidity',
      value: '30',
      icon: <MaterialIcons name="water-drop" size={24} color={'#4D6BFE'} />,
    },
  ];
  return (
    <View className="flex flex-row mt-4 justify-between items-center">
      {metrics?.map((metric: Metric, index) => (
        <View key={index} className="p-4 border-2 rounded-2xl">
          <View>
            <Text>{metric.title}</Text>
          </View>
          <View className="flex flex-row justify-between mt-4">
            <Text>{metric.value}</Text>
            <View>{metric.icon}</View>
          </View>
        </View>
      ))}
    </View>
  );
}
