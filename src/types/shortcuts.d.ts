import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

export type Shortcut = {
  slug: string;
  iconName: MaterialIconName;
  onClick: () => void;
  bgColor: string;
  iconColor: string;
};

type Shortcuts = Array<Shortcut>;
