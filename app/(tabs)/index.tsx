import { StyleSheet, Text, ScrollView } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '@/components/ui/Title';
import WorkoutTitle from '@/components/ui/WorkoutTitle';
import WorkoutContainer from '@/components/ui/WorkoutContainer';
import { MenuProvider } from 'react-native-popup-menu';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.18.4:3000/graphql',
  cache: new InMemoryCache(),
});

export default function HomeScreen() {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView stickyHeaderIndices={[0]}>
            <WorkoutOverviewHeader />
            <Title titleText='Full Body' />
            <WorkoutContainer />
            <WorkoutTitle />
            <WorkoutContainer />
          </ScrollView>
        </SafeAreaView>
      </MenuProvider>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
