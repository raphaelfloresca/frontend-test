import React from 'react'
import { useAssets } from 'expo-asset';
import { Text, View, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

type TitleProps = {
  titleText: string
}

export default function Title({ titleText }: TitleProps) {
  const [assets, error] = useAssets([
    require('../../assets/images/candice-icon.png'),
  ]);

  return (
    <View testID="test-title" style={styles.titleContainer} >
      <Text style={styles.titleHeading}>{titleText}</Text>
      <View style={styles.byLineContainer}>
        {assets ? <Image source={{ uri: assets[0].uri }} style={styles.icon} /> : null}
        <Text style={styles.byLine}>With Candice</Text>
      </View>
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
  byLineContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  byLine: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  icon: {
    width: 28,
    height: 28
  }
});
