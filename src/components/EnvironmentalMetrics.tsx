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
      icon: <MaterialIcons name="shield-moon" size={24} />,
    },
    {
      title: 'Air Quality:170',
      value: 'Moderate',
      icon: <MaterialIcons name="waves" size={24} />,
    },
    {
      title: 'Humidity',
      value: '30',
      icon: <MaterialIcons name="water-drop" size={24} />,
    },
  ];
  return (
    <View>
      {metrics?.map((metric: Metric, index) => (
        <View key={index}>
          <View>
            <Text>{metric.title}</Text>
          </View>
          <View>
            <Text>{metric.value}</Text>
            <View>{metric.icon}</View>
          </View>
        </View>
      ))}
    </View>
  );
}
