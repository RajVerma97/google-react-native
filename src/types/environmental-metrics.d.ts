import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

export type Metric = {
  title: string;
  value: string;
  iconName: MaterialIconName;
  iconColor: string;
};

export type Metrics = Array<Metric>;
