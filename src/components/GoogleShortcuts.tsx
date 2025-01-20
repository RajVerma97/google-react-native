import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { shortcuts } from '@/data/shortcuts';
import { Shortcut } from '@/types/shortcuts';
import { SHORTCUT_ICON_SIZE } from '@constants/Shortcuts';

export default function GoogleShortcuts() {
  return (
    <View className="flex flex-row justify-between mt-4">
      {shortcuts?.map((shortcut: Shortcut, index) => (
        <TouchableOpacity
          className="px-5 py-3 rounded-full"
          style={{ backgroundColor: shortcut.bgColor }}
          key={index}
          onPress={() => shortcut.onClick()}
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
