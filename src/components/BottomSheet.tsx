import React, { useCallback } from 'react';
import { View, Modal, TouchableOpacity, Animated, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type BottomSheetProps = {
  isVisible: boolean;
  hideBottomSheet: () => void;
  translateY: Animated.Value;
};

export default function BottomSheet({ isVisible, hideBottomSheet, translateY }: BottomSheetProps) {
  const handleContentPress = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <Modal visible={isVisible} transparent animationType="none" onRequestClose={hideBottomSheet}>
      <TouchableOpacity className="flex-1 bg-black/50" activeOpacity={1} onPress={hideBottomSheet}>
        <Animated.View
          style={{ transform: [{ translateY }] }}
          className="absolute bottom-0 bg-white w-full rounded-t-3xl p-6"
        >
          <TouchableOpacity activeOpacity={1} onPress={handleContentPress} className="flex-1">
            <View className="flex-row justify-between items-center bg-green-500 p-4">
              <Text className="text-lg font-semibold">Bottom Sheet</Text>
              <TouchableOpacity onPress={hideBottomSheet}>
                <MaterialIcons name="close" color="black" size={28} />
              </TouchableOpacity>
            </View>
            <View className="mt-4 bg-blue-500">
              <Text>Hello Bottomsheet</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}
