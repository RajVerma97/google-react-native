import { BOTTOM_SHEET_TRANSLATE_Y, BOTTOM_SHEET_DURATION_MS } from '@/constants/BottomSheet';
import { useState } from 'react';
import { Easing, Animated } from 'react-native';
export default function useBottomSheet() {
  const [isVisible, setIsVisible] = useState(false);
  const translateY = new Animated.Value(BOTTOM_SHEET_TRANSLATE_Y);

  const hideBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: BOTTOM_SHEET_TRANSLATE_Y,
      duration: BOTTOM_SHEET_DURATION_MS,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  const showBottomSheet = () => {
    setIsVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: BOTTOM_SHEET_TRANSLATE_Y,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  return {
    isVisible,
    hideBottomSheet,
    showBottomSheet,
    translateY,
  };
}
