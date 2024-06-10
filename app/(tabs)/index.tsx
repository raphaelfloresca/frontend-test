import { StyleSheet } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '@/components/ui/Title';
import WorkoutTitle from '@/components/ui/WorkoutTitle';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WorkoutOverviewHeader />
      <Title titleText='Full Body' />
      <WorkoutTitle />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
