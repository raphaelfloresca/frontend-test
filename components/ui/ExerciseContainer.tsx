import { StyleSheet, Text, View } from 'react-native'
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import NuliIcon from './NuliIcon';
import { TabBarIcon } from '../navigation/TabBarIcon'

export default function ExerciseContainer() {
  const [assets, error] = useAssets([
    require('../../assets/images/splash.png'),
  ]);

  return (
    <View style={styles.exerciseContainer}>
      {assets ? <Image source={{ uri: assets[0].uri }} style={styles.exerciseImage} /> : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseTitle}>Single Arm Cable Row (Left)</Text>
          <Text style={styles.exerciseSets}>4 sets x <Text style={styles.exerciseReps}>10-12 reps</Text></Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', gap: 15, marginRight: 3 }}>
          <View style={{ borderRadius: 100, backgroundColor: "black", padding: 6 }}>
            <NuliIcon name="swap" color="white" fontSize={20} />
          </View>
          <View style={{ borderRadius: 100, backgroundColor: "black", padding: 6 }}>
            <TabBarIcon name="ellipsis-horizontal" color="white" />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    padding: 6,
    flexDirection: 'row',
    gap: 10,
  },
  exerciseImage: {
    width: 80,
    height: 100,
    borderRadius: 22
  },
  exerciseInfo: {
    justifyContent: 'center',
    gap: 12,
    flex: 2
  },
  exerciseTitle: {
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 18,
    color: '#262C45'
  },
  exerciseReps: {
    fontFamily: 'OpenSans_700Bold',
    color: '#262C45A6'
  },
  exerciseSets: {
    fontFamily: 'OpenSans_400Regular',
    color: '#262C45A6'
  }

})

