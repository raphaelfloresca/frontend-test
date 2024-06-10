import React from 'react';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'

type NuliIconProps = {
  name: "heart" | "back" | "cog"
  color?: string
}

/**
 * Generate the icons from IcoMoon
 */
const Icon = createIconSetFromIcoMoon(
  require('../../assets/icons/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

/**
 * Return the icons as a component
 *
 * @param name - the name of the particular icon in the icon set
 */
export default function NuliIcon({ name, color }: NuliIconProps) {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/icons/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Icon testID="test-icon" name={name} style={{ padding: 10, fontSize: 24, color: color }} />
  )
}

NuliIcon.defaultProps = {
  color: '#262c45'
}
