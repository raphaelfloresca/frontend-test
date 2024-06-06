import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { LinearGradient } from 'expo-linear-gradient';

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
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Full Body</Text>
          <Text>With Candice</Text>
        </View>
        <LinearGradient colors={['#5B167C', '#6D179C']} style={styles.trialBanner}>
          <View style={styles.trialBannerText}>
            <Text style={{ color: 'white' }}>Your 7-day free trial is running. Enjoy and make the most of it!</Text>
          </View>
          <View style={styles.trialDaysRemaining}>
            <Text style={{ color: 'white', textAlign: 'center' }}>6</Text>
            <Text style={{ color: 'white', textAlign: 'center' }}>days left</Text>
          </View>
        </LinearGradient>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 40,
    display: 'flex',
    gap: 12
  },
  trialBanner: {
    marginHorizontal: 10,
    marginVertical: 30,
    borderRadius: 16,
    borderColor: '#FFFFFFA6',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    gap: 20
  },
  trialBannerText: {
    paddingLeft: 25,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center'
  },
  trialDaysRemaining: {
    flexBasis: 58,
    paddingVertical: 20,
    paddingRight: 25,
    flex: 1,
    justifyContent: 'center'
  }
});
