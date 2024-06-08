import React from 'react';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'

type NuliIconProps = {
  name: "heart" | "back" | "cog"
}

// Use the Nuli icons
const Icon = createIconSetFromIcoMoon(
  require('../../assets/icons/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

export default function NuliIcon({ name }: NuliIconProps) {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/icons/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Icon accessibilityLabel={name} name={name} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
  icon: {
    padding: 12,
    color: '#262C45'
  },
})
