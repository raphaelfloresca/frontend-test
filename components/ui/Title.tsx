import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type TitleProps = {
  titleText: string
}

export default function Title({ titleText }: TitleProps) {

  return (
    <View testID="test-title" style={styles.titleContainer} >
      <Text style={styles.titleHeading}>{titleText}</Text>
      <Text style={styles.byLine}>With Candice</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 40,
    gap: 12
  },
  titleHeading: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 28,
  },
  byLine: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2
  }
});
