import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type Shortcut = {
  slug: string;
  icon: React.ReactElement;
  onClick: (slug: string) => void;
};

type Shortcuts = Shortcut[];
export default function GoogleShortcuts() {
  const shortcuts: Shortcuts = [
    {
      slug: 'search-by-image',
      icon: <MaterialIcons name="image-search" />,
      onClick: (slug) => {
        console.log(slug);
      },
    },
    {
      slug: 'language',
      icon: <MaterialIcons name="language" />,
      onClick: (slug) => {
        console.log(slug);
      },
    },
    {
      slug: 'education',
      icon: <MaterialIcons name="school" />,
      onClick: (slug) => {
        console.log(slug);
      },
    },
    {
      slug: 'music',
      icon: <MaterialIcons name="music-note" />,
      onClick: (slug) => {
        console.log(slug);
      },
    },
  ];
  return (
    <View className="flex justify-between p-4">
      {shortcuts?.map((shortcut: Shortcut, index) => (
        <TouchableOpacity key={index} onPress={() => shortcut.onClick(shortcut.slug)}>
          {shortcut.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}
