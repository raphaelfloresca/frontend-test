import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import NuliIcon from './NuliIcon';
import PopupMenu from './PopupMenu';

type ExerciseContainerProps = {
  name: string
  sets: string
  reps: string
  swapWithExerciseId?: number
  handleSwap: () => void
}

/**
 * Render the individual exercise 
 * 
 * @param props
 * @param props.name
 * @param props.sets
 * @param props.reps
 * @param props.swapWithExerciseId - the exerciseId to swap to
 * @param handleSwap - a callback function to allow swap of parent to be triggered in the child
 */
export default function ExerciseContainer({ name, sets, reps, swapWithExerciseId, handleSwap }: ExerciseContainerProps) {
  // TODO: Load actual exercise photo assets
  const [assets, error] = useAssets([
    require('../../assets/images/splash.png'),
  ]);

  return (
    <View style={styles.exerciseContainer}>
      {assets ? <Image source={{ uri: assets[0].uri }} style={styles.exerciseImage} /> : null}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseTitle}>{name}</Text>
          <Text style={styles.exerciseSets}>{sets} x <Text style={styles.exerciseReps}>{reps}</Text></Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', gap: 15, marginRight: 3 }}>
          <View style={{ borderRadius: 100, backgroundColor: "black", padding: 6 }}>
            <TouchableOpacity onPress={handleSwap}>
              <NuliIcon name="swap" color="white" fontSize={20} />
            </TouchableOpacity>
          </View>
          <View style={{ borderRadius: 100, backgroundColor: "black", padding: 6 }}>
            <PopupMenu />
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

