import axios from 'axios';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

const CLOUD_NAME = 'doobny9lm';
const UPLOAD_PRESET = 'custom';

export const uploadImageToCloudinary = async (imageUri: string) => {
  const apiUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  let formData = new FormData();

  if (Platform.OS === 'web') {
    const base64String = imageUri.split(',')[1];
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    formData.append('file', blob, 'image.jpg');
  } else {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
    });

    formData.append('file', `data:image/jpeg;base64,${base64}`);
  }

  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('cloud_name', CLOUD_NAME);

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
