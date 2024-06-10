import { StyleSheet, Text, View } from "react-native";

export default function WorkoutTitle() {
  return (
    <View style={styles.container} testID="test-workout-title">
      <Text style={styles.text}>Triset • 4 rounds</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 32,
    marginLeft: 55,
    paddingTop: 32,
    borderLeftWidth: 1,
    borderLeftColor: '#e9e9e9'
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'WorkSans_600SemiBold',
    fontSize: 14,
    color: '#3D415673',
    textTransform: 'uppercase',
    letterSpacing: 1
  }
})
