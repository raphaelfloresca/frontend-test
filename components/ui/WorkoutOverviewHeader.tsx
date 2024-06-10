import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import NuliIcon from './NuliIcon'

/**
 * Returns the application header of the whole app
 */
export default function WorkoutOverviewHeader() {
  return (
    <View testID="workout-overview-header">
      <View style={styles.header}>
        <View style={{ padding: 10 }}>
          <NuliIcon name="back" />
        </View>
        <View style={styles.iconsRight}>
          <View style={{ padding: 10 }}>
            <NuliIcon name="heart" color="#F6727B" />
          </View>
          <View style={{ padding: 10 }}>
            <NuliIcon name="cog" />
          </View>
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
