import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TabBarIcon name="arrow-back" style={styles.icon} />
        <View style={styles.iconsRight}>
          <TabBarIcon name="heart" style={[styles.icon, styles.iconHeart]} />
          <TabBarIcon name="cog-outline" style={styles.icon} />
        </View>
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
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 56,
    backgroundColor: '#fff'
  },
  iconsRight: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },
  icon: {
    padding: 12,
    color: '#262C45'
  },
  iconHeart: {
    color: '#F6727B'
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 40,
    display: 'flex',
    gap: 12
  }
});
