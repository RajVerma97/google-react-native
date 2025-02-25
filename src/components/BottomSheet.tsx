import React, { useCallback } from 'react';
import { View, Modal, TouchableOpacity, Animated, Text, Image } from 'react-native';
import HorizontalDivider from '@components/HorizontalDivider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GoogleLogo from '../../assets/images/google-logo.png';
import { SETTINGS } from '@/data/bottomsheet';
import { SettingItem } from '@/types/bottomsheet';
import { useGoogleAuth } from '@/hooks/useGoogleAuth';

type BottomSheetProps = {
  isVisible: boolean;
  hideBottomSheet: () => void;
  translateY: Animated.Value;
};

export default function BottomSheet({ isVisible, hideBottomSheet, translateY }: BottomSheetProps) {
  const { user, signInWithGoogle, handleLogout } = useGoogleAuth();

  const handleContentPress = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={hideBottomSheet}
      style={{ flex: 1 }}
    >
      <TouchableOpacity
        className="flex-1 bg-black/50"
        activeOpacity={1}
        onPress={hideBottomSheet}
        style={{ flex: 1 }}
      >
        <Animated.View
          style={{ transform: [{ translateY }], flex: 1 }}
          className="absolute bottom-0 w-full"
        >
          <TouchableOpacity activeOpacity={1} onPress={handleContentPress} style={{ flex: 1 }}>
            <View
              className="flex-1 bg-[#2E3034] py-3 px-4 rounded-3xl min-h-screen"
              style={{ flex: 1 }}
            >
              <View className="flex-row justify-between items-center  p-3">
                <TouchableOpacity onPress={hideBottomSheet} className="self-start">
                  <MaterialIcons name="close" color="white" size={28} />
                </TouchableOpacity>
                <View className="w-20 h-12">
                  <Image
                    source={GoogleLogo}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ width: 28 }} />
              </View>
              <View className="flex flex-row justify-between">
                <View className="flex flex-row">
                  {user ? (
                    <View className="flex flex-row items-center">
                      <TouchableOpacity className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center">
                        {user.photo ? (
                          <Image
                            source={{ uri: user.photo }}
                            style={{ width: '100%', height: '100%' }}
                            className="rounded-full"
                          />
                        ) : (
                          <MaterialIcons name="account-circle" color="white" size={28} />
                        )}
                      </TouchableOpacity>
                      <View className="ml-2">
                        <Text className="text-white font-inter text-xl"> {user.name}</Text>
                        <Text className="text-white font-inter mt-1 text-md">{user.email}</Text>

                        <TouchableOpacity className="ml-2 mt-2" onPress={handleLogout}>
                          <Text className="text-red-500 font-inter text-lg">Logout</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View className="flex flex-row items-center">
                      <TouchableOpacity className=" w-12 h-12 bg-[#79929E] rounded-full flex justify-center items-center">
                        <MaterialIcons name="account-circle" color="white" size={28} />
                      </TouchableOpacity>
                      <TouchableOpacity className="ml-2" onPress={signInWithGoogle}>
                        <Text className="text-blue-500 font-inter text-lg">Add Account</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="arrow-drop-down-circle" color="white" size={36} />
                </TouchableOpacity>
              </View>

              <View className="mt-4">
                <TouchableOpacity className="border rounded-full px-4 py-2  self-center justify-between items-center border-gray-400">
                  <Text className=" text-white text-lg font-inter font-medium">
                    Manage Your Google Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="p-2 mt-2">
                {SETTINGS?.map((settingItem: SettingItem, index) => (
                  <View key={index} style={{ flex: 1 }}>
                    <TouchableOpacity className="flex flex-row items-center">
                      <MaterialIcons name={settingItem.iconName} color="white" size={28} />
                      <Text className="w-5/6 text-white font-inter  capitalize ml-4">
                        {settingItem.text}
                      </Text>
                    </TouchableOpacity>
                    <HorizontalDivider />
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}
