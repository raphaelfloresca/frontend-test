import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NuliIcon from './NuliIcon'

/**
 * Hello!
 */
export default function WorkoutOverviewHeader() {
  return (
    <View testID="workout-overview-header">
      <View style={styles.header}>
        <NuliIcon name="back" />
        <View style={styles.iconsRight}>
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
