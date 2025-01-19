import { SafeAreaView } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';

export default function WebViewScreen() {
  const { uri } = useLocalSearchParams();
  const decodedUri = decodeURIComponent(uri as string);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: decodedUri }} />
    </SafeAreaView>
  );
}
