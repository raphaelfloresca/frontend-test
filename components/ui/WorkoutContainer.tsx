import { View, StyleSheet } from "react-native"
import ExerciseContainer from "./ExerciseContainer";

export default function WorkoutContainer() {
  return (
    <View style={styles.container}>
      <ExerciseContainer />
      <ExerciseContainer />
      <ExerciseContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#E9E9E9",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 28
  },
})

