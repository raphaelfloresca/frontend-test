import { View, StyleSheet } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WorkoutOverviewHeader />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

