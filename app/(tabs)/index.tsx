import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TabBarIcon name="arrow-back" />
        <TabBarIcon name="heart" />
        <TabBarIcon name="cog-outline" />
      </View>
      <ScrollView style={styles.content}>
        {[...Array(100)].map((x, i) =>
          <Text key={i}>Hello world!</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1
  }
});
