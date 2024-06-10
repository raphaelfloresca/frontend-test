import { StyleSheet, Text, ScrollView } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '@/components/ui/Title';
import WorkoutTitle from '@/components/ui/WorkoutTitle';
import WorkoutContainer from '@/components/ui/WorkoutContainer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <WorkoutOverviewHeader />
        <Title titleText='Full Body' />
        <WorkoutContainer />
        <WorkoutTitle />
        <WorkoutContainer />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
