import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

// Use the Nuli icons
const Icon = createIconSetFromIcoMoon(
  require('../../assets/icons/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

export default function WorkoutOverviewHeader() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/icons/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View testID="workout-overview-header">
      <View style={styles.header}>
        <Icon name="back" style={styles.icon} />
        <View style={styles.iconsRight}>
          <Icon name="heart" style={[styles.icon, styles.iconHeart]} />
          <Icon name="cog" style={styles.icon} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 56,
    backgroundColor: '#fff'
  },
  iconsRight: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },
  icon: {
    padding: 12,
    color: '#262C45'
  },
  iconHeart: {
    color: '#F6727B',
  }
})
