import { StyleSheet, ScrollView, View, Text } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TabBarIcon name="arrow-back" style={styles.icon} />
        <View style={styles.iconsRight}>
          <TabBarIcon name="heart" style={[styles.icon, styles.iconHeart]} />
          <TabBarIcon name="cog-outline" style={styles.icon} />
        </View>
      </View>
      {/* Content */}
      <ScrollView>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Full Body</Text>
          <Text>With Candice</Text>
        </View>
        {/* Free Trial Banner */}
        <LinearGradient colors={['#5B167C', '#6D179C']} style={styles.trialBanner}>
          <View style={styles.trialBannerText}>
            <Text style={{ color: 'white' }}>Your 7-day free trial is running. Enjoy and make the most of it!</Text>
          </View>
          <View style={styles.trialDaysRemaining}>
            <Text style={{ color: 'white', textAlign: 'center' }}>6</Text>
            <Text style={{ color: 'white', textAlign: 'center' }}>days left</Text>
          </View>
        </LinearGradient>
        {/* Triset */}
        <View style={styles.exercisesContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ width: 80, height: 100, backgroundColor: 'red', borderRadius: 22 }}></View>
              <View style={{ justifyContent: 'center' }}>
                <Text>Single Arm Cable Row (Left)</Text>
                <Text>4 sets x 10-12 reps</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <TabBarIcon name="refresh-circle" />
              <TabBarIcon name="ellipsis-horizontal" />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ width: 80, height: 100, backgroundColor: 'red', borderRadius: 22 }}></View>
              <View style={{ justifyContent: 'center' }}>
                <Text>Single Arm Cable Row (Right)</Text>
                <Text>4 sets x 10-12 reps</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <TabBarIcon name="refresh-circle" />
              <TabBarIcon name="ellipsis-horizontal" />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ width: 80, height: 100, backgroundColor: 'red', borderRadius: 22 }}></View>
              <View style={{ justifyContent: 'center' }}>
                <Text>Cable Seated Row</Text>
                <Text>4 sets x 6-8 reps</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
              <TabBarIcon name="refresh-circle" />
              <TabBarIcon name="ellipsis-horizontal" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
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
    flex: 5,
    justifyContent: 'center'
  },
  trialDaysRemaining: {
    flexBasis: 58,
    paddingVertical: 20,
    paddingRight: 25,
    flex: 1,
    justifyContent: 'center'
  },
  exercisesContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 28,
    padding: 6,
    gap: 12
  }
});
