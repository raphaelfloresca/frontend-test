import { StyleSheet, Text, ScrollView } from 'react-native';
import WorkoutOverviewHeader from '@/components/ui/WorkoutOverviewHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '@/components/ui/Title';
import WorkoutTitle from '@/components/ui/WorkoutTitle';
import WorkoutContainer from '@/components/ui/WorkoutContainer';
import { MenuProvider } from 'react-native-popup-menu';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/*
 * Query the data from the GraphQL endpoing
 */
const client = new ApolloClient({
  uri: 'http://192.168.18.4:3000/graphql',
  cache: new InMemoryCache(),
});

export default function HomeScreen() {
  return (
    // Provide the data across the whole component tree
    <ApolloProvider client={client}>
      {/* Allow menus to be called across the whole component tree */}
      <MenuProvider>
        {/* Don't render at the phone notch */}
        <SafeAreaView style={styles.container}>
          {/* Allow the header to be sticky */}
          <ScrollView stickyHeaderIndices={[0]}>
            <WorkoutOverviewHeader />
            <Title titleText='Full Body' />
            {/* Two workout containers to showcase scroll functionality */}
            <WorkoutContainer />
            <WorkoutTitle title="Triset • 4 rounds" />
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
