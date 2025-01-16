import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type Shortcut = {
  slug: string;
  iconName: string;
  onClick: (slug: string) => void;
  bgColor: string;
  iconColor: string;
};

const SHORTCUT_ICON_SIZE = 34;

type Shortcuts = Array<Shortcut>;

export default function GoogleShortcuts() {
  const shortcuts: Shortcuts = [
    {
      slug: 'search-by-image',
      iconName: 'image-search',
      onClick: (slug) => {
        console.log(slug);
      },
      bgColor: '#4C4533',
      iconColor: '#FFFFFF',
    },
    {
      slug: 'language',
      iconName: 'language',
      onClick: (slug) => {
        console.log(slug);
      },
      bgColor: '#383F4D',
      iconColor: '#FFD700',
    },
    {
      slug: 'education',
      iconName: 'school',
      onClick: (slug) => {
        console.log(slug);
      },
      bgColor: '#36423B',
      iconColor: '#00FF00',
    },
    {
      slug: 'music',
      iconName: 'music-note',
      onClick: (slug) => {
        console.log(slug);
      },
      bgColor: '#453134',
      iconColor: '#FF69B4',
    },
  ];

  return (
    <View className="flex flex-row justify-between mt-4">
      {shortcuts?.map((shortcut: Shortcut, index) => (
        <TouchableOpacity
          className="px-5 py-3 rounded-full"
          style={{ backgroundColor: shortcut.bgColor }}
          key={index}
          onPress={() => shortcut.onClick(shortcut.slug)}
          accessibilityRole="button"
          accessibilityLabel={shortcut.slug}
        >
          <MaterialIcons
            name={shortcut.iconName}
            size={SHORTCUT_ICON_SIZE}
            color={shortcut.iconColor}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
