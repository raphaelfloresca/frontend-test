import { View, StyleSheet } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  },
})
