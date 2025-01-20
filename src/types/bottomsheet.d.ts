import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

export type SettingItem = {
  iconName: MaterialIconName;
  text: string;
};

export type Settings = Array<SettingItem>;
