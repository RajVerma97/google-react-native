import { useState } from 'react';
import { Easing, Animated } from 'react-native';
export default function useBottomSheet() {
  const [isVisible, setIsVisible] = useState(false);
  const translateY = new Animated.Value(300);

  const hideBottomSheet = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  const showBottomSheet = () => {
    setIsVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
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
