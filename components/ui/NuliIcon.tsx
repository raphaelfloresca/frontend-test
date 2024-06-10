import React from 'react';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'

type NuliIconProps = {
  name: "heart" | "back" | "cog" | "swap"
  color?: string,
  fontSize?: number
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
export default function NuliIcon({ name, color, fontSize }: NuliIconProps) {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/icons/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Icon testID="test-icon" name={name} style={{ fontSize: fontSize, color: color }} />
  )
}

NuliIcon.defaultProps = {
  color: '#262c45',
  fontSize: 24
}
