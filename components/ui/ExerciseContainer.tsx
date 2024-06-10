import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import NuliIcon from './NuliIcon';
import { TabBarIcon } from '../navigation/TabBarIcon'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

type ExerciseContainerProps = {
  name: string
  sets: string
  reps: string
  weight?: string
  swapWithExerciseId?: number
  handleSwap: () => void
}

export default function ExerciseContainer({ name, sets, reps, weight, swapWithExerciseId, handleSwap }: ExerciseContainerProps) {
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
            <Menu>
              <MenuTrigger>
                <TabBarIcon name="ellipsis-horizontal" color="white" />
              </MenuTrigger>
              <MenuOptions customStyles={{
                optionsContainer: {
                  borderRadius: 10,
                  width: 250,
                  paddingVertical: 10,
                  backgroundColor: "#FFFFFF"
                },
              }}>
                <Text style={{ textAlign: 'center', paddingBottom: 10, fontSize: 11 }}>Options</Text>
                <MenuOption onSelect={() => alert(`View Exercise Info`)} >
                  <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>View Exercise Info</Text>
                    <NuliIcon name="menu-info" />
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Show Exercise History`)} >
                  <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>Show Exercise History</Text>
                    <NuliIcon name="history" />
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Prefill Weights & Reps`)} >
                  <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>Prefill Weights & Reps</Text>
                    <NuliIcon name="prefill" />
                  </View>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Swap Exercise`)} >
                  <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>Swap Exercise</Text>
                    <NuliIcon name="swap" />
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
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

